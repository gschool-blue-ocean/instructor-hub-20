DROP TABLE IF EXISTS student_assessment_scores CASCADE;
DROP TABLE IF EXISTS student_project_scores CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS assessments CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS cohorts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  password TEXT,
  email TEXT
);



CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  cohort_number INTEGER,
  start TEXT,
  graduation TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);



CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  stu_name TEXT,
  email TEXT,
  github TEXT,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);



CREATE TABLE assessments (
  id SERIAL PRIMARY KEY,
  assess_name TEXT,
  type TEXT
);



CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_name TEXT,
  type TEXT
);



CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  group_name TEXT,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);



CREATE TABLE student_assessment_scores (
  id SERIAL PRIMARY KEY,
  assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  grade INTEGER
);



CREATE TABLE student_project_scores (
  id SERIAL PRIMARY KEY,
  group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  grade INTEGER
);
