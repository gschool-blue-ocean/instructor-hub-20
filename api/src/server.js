import express from "express";

import pg from "pg";

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

app.use(express.json());

// // Set up the PostgreSQL connection
// const pool = new Pool({
//   user: 'your_database_user',
//   host: 'your_database_host',
//   database: 'your_database_name',
//   password: 'your_database_password',
//   port: 5432,
// });

app.get("/api/tasks", async (req, res, next) => {
  const result = await db.query("SELECT * FROM tasks").catch(next);
  res.send(result.rows);
});

app.get("/api/tasks/:id", async (req, res, next) => {
  const result = await db
    .query("SELECT * FROM tasks WHERE id = $1", [req.params.id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

app.post("/api/tasks", async (req, res, next) => {
  const { description } = req.body;

  const result = await db
    .query("INSERT INTO tasks(description) VALUES ($1)", [description])
    .catch(next);
  res.send(result.rows[0]);
});

app.delete("/api/tasks/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
  res.sendStatus(204);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Students routes
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
    const { name, cohort_id } = req.body;
    const { rows } = await pool.query('INSERT INTO students (name, cohort_id) VALUES ($1, $2) RETURNING *', [name, cohort_id]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cohort_id } = req.body;
    const { rowCount } = await pool.query('UPDATE students SET name = $1, cohort_id = $2 WHERE id = $3', [name, cohort_id, id]);

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

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

export default app;
