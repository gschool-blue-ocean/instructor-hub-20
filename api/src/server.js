import * as dotenv from "dotenv";
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import pg from "pg";
import jwt from "jsonwebtoken";
// import { createClient } from "redis";

const app = express();
// const pubClient = createClient({ url: "redis://redis:6379" });
app.use(cors());
app.use(express.json());
dotenv.config();

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// let redisClient = pubClient;

// redisClient.on("connect", () => {
//   console.log("Connected to Redis");
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

// async function fetchDataFromRedisOrDatabase(req, res, next) {
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const cacheResults = await new Promise((resolve, reject) => {
//       redisClient.get(id, (error, result) => {
//         if (error) reject(error);
//         else resolve(result);
//       });
//     });
//     if (cacheResults) {
//       console.log(res);
//       console.log("Data retrieved from cache");
//       res.json(JSON.parse(cacheResults));
//     } else {
//       next();
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: `Something went wrong: ${err}` });
//   }
// }

//-----------------------------------------ROUTES--------------------------------------------------//

// --------------------- Users routes ----------------------------- //

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    const testUsername = await pool.query(
      "SELECT email FROM users WHERE email = $1",
      [email]
    );
    if (testUsername.rows[0]) {
      res.status(409).send({ message: "Email already exists" });
    } else {
      const { rows } = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, hashedPwd]
      );
      if (rows[0].email) {
        res.status(201).send({ message: "Account successfully registered!" });
      } else {
        res.status(500).send({ message: "Internal Error" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await pool.query(
      "SELECT email, password FROM users WHERE email = $1",
      [email]
    );
    if (!response.rows[0]) {
      res.status(404).send({ message: "User not found" });
    } else if (await bcrypt.compare(password, response.rows[0].password)) {
      const token = jwt.sign(
        { email: response.rows[0].email },
        "my-32-character-ultra-secure-and-ultra-long-secret",
        { expiresIn: "2h" }
      );
      console.log(token);
      res.status(200).send({ token, user: { email: response.rows[0].email } });
    } else {
      res.status(409).send({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// --------------------- Students routes ----------------------------- //
app.get("/students", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT s.*, c.id, c.cohort_number, c.graduation FROM students s JOIN cohorts c ON s.cohort_id=c.id"
    );
    //

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.get("/students/:cohort_id", async (req, res) => {
  const { cohort_id } = req.params;
  try {
    const { rows } = await pool.query(
      "SELECT students.id AS id, stu_name, email, github, cohort_id, cohorts.graduation, cohorts.cohort_number FROM students INNER JOIN cohorts ON (students.cohort_id = cohorts.id) WHERE cohorts.cohort_number = $1",
      [cohort_id]
    );

    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.post("/students", async (req, res) => {
  try {
    const { stu_name, email, gitHub, cohort_number } = req.body;
    const response = await pool.query(
      "SELECT id FROM cohorts WHERE cohort_number = $1",
      [cohort_number]
    );
    const id = response.rows[0];
    console.log(response.rows);
    const { rows } = await pool.query(
      "INSERT INTO students (stu_name, email, github, cohort_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [stu_name, email, gitHub, id]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const stuID = req.params.id;
    const { stu_name, email, gitHub, cohort_number } = req.body;
    const response = await pool.query(
      "SELECT id FROM cohorts WHERE cohort_number = $1",
      [cohort_number]
    );
    const id = response.rows[0];
    const { rowCount } = await pool.query(
      "UPDATE students SET stu_name = $1, email = $2, github = $3, cohort_id = $4 WHERE id = $5",
      [stu_name, email, gitHub, id, stuID]
    );
    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );
    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// --------------------------- Cohorts routes -------------------------------------//
app.get("/cohorts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM cohorts");

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Something went wrong: ${error}` });
  }
});

// app.get("/cohorts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rows } = await pool.query("SELECT * FROM cohorts WHERE id = $1", [
//       id,
//     ]);

//     if (rows.length === 0) {
//       res.sendStatus(404);
//     } else {
//       await redisClient.set(id, JSON.stringify(rows[0]));
//
//       res.json(rows[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500).json({ message: `Something went wrong: ${err}` });
//   }
// });

app.post("/cohorts", async (req, res) => {
  try {
    const { cohort_number, start, graduation, user_id } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO cohorts (cohort_number, start, graduation, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [cohort_number, start, graduation, user_id]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/cohorts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { cohort_number, start, graduation } = req.body;
    const { rowCount } = await pool.query(
      "UPDATE cohorts SET cohort_number = $1, start = $2, graduation = $3 WHERE id = $4",
      [cohort_number, start, graduation, id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/cohorts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM cohorts WHERE id = $1", [
      id,
    ]);
    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

//----------------- Groups routes -----------------------//
app.get("/groups", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM groups");
    //

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.get("/groups/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT s.stu_name, g.group_name, c.cohort_number, sps.grade
      FROM students s 
      JOIN student_project_scores sps ON sps.student_id = s.id
      JOIN groups g ON sps.group_id = g.id
      JOIN cohorts c ON s.cohort_id = c.id
      WHERE g.id = $1`,
      [id]
    );
    console.log(rows);
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(rows);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

// app.post("/groups", async (req, res) => {
//   try {
//     const {
//       group_name,

//     } = req.body;
//     const { rows } = await pool.query(
//       "INSERT INTO groups (group_name, student1, student2, student3, student4, student5, student6) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//       [group_name, student1, student2, student3, student4, student5, student6]
//     );
//     res.status(201).json(rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.put("/groups/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       group_name,
//       student1,
//       student2,
//       student3,
//       student4,
//       student5,
//       student6,
//     } = req.body;
//     const { rowCount } = await pool.query(
//       "UPDATE groups SET group_name = $1, student1 = $2, student2 = $3, student3 = $4, student4 = $5, student5 = $6, student6 = $7 WHERE id = $3",
//       [
//         group_name,
//         student1,
//         student2,
//         student3,
//         student4,
//         student5,
//         student6,
//         id,
//       ]
//     );

//     if (rowCount === 0) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

app.delete("/groups/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM groups WHERE id = $1", [
      id,
    ]);

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// ----------------- Project routes ----------------------//
app.get("/projects", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM projects");
    //

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [
      id,
    ]);
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const { project_name, type } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO projects (project_name, type) VALUES ($1, $2) RETURNING *",
      [project_name, type]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { project_name, type } = req.body;
    const { rowCount } = await pool.query(
      "UPDATE projects SET project_name = $1, type = $2 WHERE id = $3",
      [project_name, type, id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query(
      "DELETE FROM projects WHERE id = $1",
      [id]
    );
    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
// ----------------- Project Scores routes ----------------------//
// app.get("/project_scores", async (req, res) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM project_scores");

//
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500).json({ message: `Something went wrong: ${err}` });
//   }
// });

// app.get("/project_scores/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rows } = await pool.query(
//       "SELECT * FROM project_scores WHERE id = $1",
//       [id]
//     );

//     if (rows.length === 0) {
//       res.sendStatus(404);
//     } else {
//       await redisClient.set(id, JSON.stringify(rows[0]));
//
//       res.json(rows[0]);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500).json({ message: `Something went wrong: ${err}` });
//   }
// });

// app.post("/project_scores", async (req, res) => {
//   try {
//     const { group_id, project_id, grade, cohort_id } = req.body;
//     const { rows } = await pool.query(
//       "INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES ($1, $2, $3, $4) RETURNING *",
//       [group_id, project_id, grade, cohort_id]
//     );
//     res.status(201).json(rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.put("/project_scores/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { group_id, project_id, grade, cohort_id } = req.body;
//     const { rowCount } = await pool.query(
//       "UPDATE project_scores SET group_id = $1, project_id = $2, grade = $3, cohort_id = $4 WHERE id = $5",
//       [group_id, project_id, grade, cohort_id, id]
//     );

//     if (rowCount === 0) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.delete("/project_scores/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rowCount } = await pool.query(
//       "DELETE FROM project_scores WHERE id = $1",
//       [id]
//     );

//     if (rowCount === 0) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// ----------------- Assessments routes --------------------- //
app.get("/assessments", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM assessments");
    //

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

// app.get("/assessments/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rows } = await pool.query(
//       "SELECT * FROM assessments WHERE id = $1",
//       [id]
//     );

//     if (rows.length === 0) {
//       res.sendStatus(404);
//     } else {
//       res.json(rows[0]);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

app.post("/assessments", async (req, res) => {
  try {
    const { assess_name, type } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO assessments (assess_name, type) VALUES ($1, $2) RETURNING *",
      [assess_name, type]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/assessments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { assess_name, type } = req.body;
    const { rowCount } = await pool.query(
      "UPDATE assessments SET assess_name = $1, type = $2 WHERE id = $3",
      [assess_name, type, id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/assessments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query(
      "DELETE FROM assessments WHERE id = $1",
      [id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// ---------------- Assessment Scores routes --------------------- //
app.get("/assessment_scores", async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        student_assessment_scores.id,
        students.stu_name AS student_name,
        assessments.assess_name,
        student_assessment_scores.grade,
        cohorts.cohort_number
      FROM
        student_assessment_scores
      JOIN students ON student_assessment_scores.student_id = students.id
      JOIN assessments ON student_assessment_scores.assess_id = assessments.id
      JOIN cohorts ON students.cohort_id = cohorts.id
      ORDER BY students.stu_name ASC
    `);
    //

    res.status(204).json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.get("/assessment_scores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT
        student_assessment_scores.id,
        students.stu_name AS student_name,
        assessments.assess_name,
        student_assessment_scores.grade,
        cohorts.cohort_number
      FROM
        student_assessment_scores
      JOIN students ON student_assessment_scores.student_id = students.id
      JOIN assessments ON student_assessment_scores.assess_id = assessments.id
      JOIN cohorts ON students.cohort_id = cohorts.id
      WHERE
        cohorts.cohort_number = $1
      ORDER BY students.stu_name ASC
    `,
      [id]
    );
      // console.log(rows)
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(204).json(rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.post("/assessment_scores", async (req, res) => {
  try {
    const { student_id, assess_id, grade} = req.body;
    const { rows } = await pool.query(
      "INSERT INTO student_assessment_scores (student_id, assess_id, grade) VALUES ($1, $2, $3) RETURNING *",
      [student_id, assess_id, grade]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.patch("/assessment_scores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const { student_id, assess_id, grade } = req.body;
    const { rowCount } = await pool.query(
      `UPDATE student_assessment_scores
      SET student_id = COALESCE($1, student_id),
          assess_id = COALESCE($2, assess_id),
          grade = COALESCE($3, grade)
      WHERE id = $4;`,
      [student_id, assess_id, grade, id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/assessment_scores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query(
      "DELETE FROM student_assessment_scores WHERE id = $1",
      [id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// ---------------- Projects routes ----------------------//
app.get("/projects", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM projects");
    //

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [
      id,
    ]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const { project_name, type } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO projects (project_name, type ) VALUES ($1, $2) RETURNING *",
      [project_name, type]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { project_name, type } = req.body;
    const { rowCount } = await pool.query(
      "UPDATE projects SET project_name = $1, type = $2 WHERE id = $3",
      [project_name, type, id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query(
      "DELETE FROM projects WHERE id = $1",
      [id]
    );

    if (rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// new joint table route for Student, Project name and Project_Score
//get route that will put the above data

app.get("/student_project_scores/:id", async (req, res) => {
  try {
    const cohort_ID = req.params.id;
    const query = `
      SELECT s.stu_name, s.id, p.project_name, sps.grade, c.id, g.group_name, c.cohort_number      
      FROM 
        students s
      JOIN 
        student_project_scores sps ON s.id = sps.student_id
      JOIN 
        projects p ON sps.project_id = p.id
      JOIN
        cohorts c ON s.cohort_id = c.id
      LEFT JOIN
        groups g ON sps.group_id = g.id
      WHERE c.cohort_number= ${cohort_ID};
    `;
    const { rows } = await pool.query(query);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: `Something went wrong: ${error}` });
  }
});

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export default app;
