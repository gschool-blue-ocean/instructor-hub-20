import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE_URL);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const clearTables = async () => {
  try {
    const user = await pool.query("Drop TABLE IF EXISTS users CASCADE");
    const cohort = await pool.query("Drop TABLE IF EXISTS cohorts CASCADE");
    const student = await pool.query("Drop TABLE IF EXISTS students CASCADE");
    const project = await pool.query("Drop TABLE IF EXISTS projects CASCADE");
    const assessment = await pool.query(
      "Drop TABLE IF EXISTS assessments CASCADE"
    );
    const group = await pool.query("Drop TABLE IF EXISTS groups CASCADE");
    const assessScore = await pool.query(
      "Drop TABLE IF EXISTS student_assessment_scores CASCADE"
    );
    const projScore = await pool.query(
      "Drop TABLE IF EXISTS student_project_scores CASCADE"
    );
  } catch (error) {
    console.error(error);
    console.log("Drop Tables failed");
  }
};

const migrateTables = async () => {
  try {
    await pool.query(`CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT,
            password TEXT,
            email TEXT
        )`);
    await pool.query(`CREATE TABLE cohorts (
            id SERIAL PRIMARY KEY,
            cohort_number INTEGER,
            start TEXT,
            graduation TEXT,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
        )`);
    await pool.query(`CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            stu_name TEXT,
            email TEXT,
            github TEXT,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
        )`);
    await pool.query(`CREATE TABLE assessments (
            id SERIAL PRIMARY KEY,
            assess_name TEXT,
            type TEXT
        )`);
    await pool.query(`CREATE TABLE projects (
            id SERIAL PRIMARY KEY,
            project_name TEXT,
            type TEXT
        )`);
    await pool.query(`CREATE TABLE groups (
            id SERIAL PRIMARY KEY,
            group_name TEXT,
            project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
        )`);
    await pool.query(`CREATE TABLE student_assessment_scores (
            id SERIAL PRIMARY KEY,
            assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
            student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
            grade INTEGER
        )`);
    await pool.query(`CREATE TABLE student_project_scores (
            id SERIAL PRIMARY KEY,
            group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
            project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
            student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
            grade INTEGER
        )`);
    console.log("Tables created successfully");
  } catch (error) {
    console.error(error);
    console.log("Create Tables failed");
  }
};
const fullMigration = async () => {
  try {
    await clearTables();
    await migrateTables();
  } catch (error) {
    console.error(error);
    console.log("Migration failed");
  }
};
fullMigration();