import express from "express";

import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

app.use(express.json());

// app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// // Set up the PostgreSQL connection
// const pool = new Pool({
//   user: 'your_database_user',
//   host: 'your_database_host',
//   database: 'your_database_name',
//   password: 'your_database_password',
//   port: 5432,
// });

// app.get("/api/tasks", async (req, res, next) => {
//   const result = await db.query("SELECT * FROM tasks").catch(next);
//   res.send(result.rows);
// });

// app.get("/api/tasks/:id", async (req, res, next) => {
//   const result = await db
//     .query("SELECT * FROM tasks WHERE id = $1", [req.params.id])
//     .catch(next);

//   if (result.rows.length === 0) {
//     res.sendStatus(404);
//   } else {
//     res.send(result.rows[0]);
//   }
// });

// app.post("/api/tasks", async (req, res, next) => {
//   const { description } = req.body;

//   const result = await db
//     .query("INSERT INTO tasks(description) VALUES ($1)", [description])
//     .catch(next);
//   res.send(result.rows[0]);
// });

// app.delete("/api/tasks/:id", async (req, res, next) => {
//   const { id } = req.params;

//   await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
//   res.sendStatus(204);
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

//-----------------------------------------ROUTES(SINGULAR NON JOINT)--------------------------------------------------//

// --------------------- Students routes ----------------------------- //
app.get('/students', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM students WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/students', async (req, res) => {
  try {
    const { name, cohort_id, email, github } = req.body;
    const { rows } = await pool.query('INSERT INTO students (name, cohort_id, email, github) VALUES ($1, $2, $3, $4) RETURNING *', [name, cohort_id, email, github]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cohort_id, email, github } = req.body;
    const { rowCount } = await pool.query('UPDATE students SET name = $1, cohort_id = $2, email = $3, github = $4 WHERE id = $5', [name, cohort_id, email, github, id]);

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

app.delete('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM students WHERE id = $1', [id]);

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
app.get('/cohorts', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM cohorts');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/cohorts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM cohorts WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/cohorts', async (req, res) => {
  try {
    const { number, start_date, grad_date, instructor } = req.body;
    const { rows } = await pool.query('INSERT INTO cohorts (number, start_date, grad_date, instructor) VALUES ($1, $2, $3, $4) RETURNING *', [number, start_date, grad_date, instructor]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/cohorts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { number, start_date, grad_date, instructor } = req.body;
    const { rowCount } = await pool.query('UPDATE cohorts SET number = $1, start_date = $2, grad_date = $3, instructor = $4 WHERE id = $5', [number, start_date, grad_date, instructor, id]);

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

app.delete('/cohorts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM cohorts WHERE id = $1', [id]);

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
app.get('/groups', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM groups');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/groups/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM groups WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/groups', async (req, res) => {
  try {
    const { name, cohort_id } = req.body;
    const { rows } = await pool.query('INSERT INTO groups (name, cohort_id) VALUES ($1, $2) RETURNING *', [name, cohort_id]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/groups/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cohort_id } = req.body;
    const { rowCount } = await pool.query('UPDATE groups SET name = $1, cohort_id = $2 WHERE id = $3', [name, cohort_id, id]);

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

app.delete('/groups/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM groups WHERE id = $1', [id]);

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

// ----------------- Group Scores routes ----------------------//
app.get('/group_scores', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM group_scores');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/group_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM group_scores WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/group_scores', async (req, res) => {
  try {
    const { group_id, assignment_id, score } = req.body;
    const { rows } = await pool.query('INSERT INTO group_scores (group_id, assignment_id, score) VALUES ($1, $2, $3) RETURNING *', [group_id, assignment_id, score]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/group_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { group_id, assignment_id, score } = req.body;
    const { rowCount } = await pool.query('UPDATE group_scores SET group_id = $1, assignment_id = $2, score = $3 WHERE id = $4', [group_id, assignment_id, score, id]);

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

app.delete('/group_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM group_scores WHERE id = $1', [id]);

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

// ----------------- Assessments routes --------------------- //
app.get('/assessments', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM assessments');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/assessments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM assessments WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/assessments', async (req, res) => {
  try {
    const { name, type, duedate } = req.body;
    const { rows } = await pool.query('INSERT INTO assessments (name, type, duedate) VALUES ($1, $2, $3) RETURNING *', [name, type, duedate]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/assessments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, duedate } = req.body;
    const { rowCount } = await pool.query('UPDATE assessments SET name = $1, type = $2, duedate = $3 WHERE id = $4', [name, type, duedate, id]);

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

app.delete('/assessments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM assessments WHERE id = $1', [id]);

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

// ---------------- Assignment Scores routes --------------------- //
app.get('/assignment_scores', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM assignment_scores');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/assignment_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM assignment_scores WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/assignment_scores', async (req, res) => {
  try {
    const { student_id, assignment_id, score } = req.body;
    const { rows } = await pool.query('INSERT INTO assignment_scores (student_id, assignment_id, score) VALUES ($1, $2, $3) RETURNING *', [student_id, assignment_id, score]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/assignment_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, assignment_id, score } = req.body;
    const { rowCount } = await pool.query('UPDATE assignment_scores SET student_id = $1, assignment_id = $2, score = $3 WHERE id = $4', [student_id, assignment_id, score, id]);

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

app.delete('/assignment_scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM assignment_scores WHERE id = $1', [id]);

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
app.get('/projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);

    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/projects', async (req, res) => {
  try {
    const { name, description, deadline } = req.body;
    const { rows } = await pool.query('INSERT INTO projects (name, description, deadline) VALUES ($1, $2, $3) RETURNING *', [name, description, deadline]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, deadline } = req.body;
    const { rowCount } = await pool.query('UPDATE projects SET name = $1, description = $2, deadline = $3 WHERE id = $4', [name, description, deadline, id]);

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

app.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM projects WHERE id = $1', [id]);

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


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export default app;
