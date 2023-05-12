DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  email TEXT,
  admin BOOLEAN
);

DROP TABLE IF EXISTS cohorts;

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  cohort_number INTEGER,
  start TEXT,
  graduation TEXT,
  instructor TEXT
);

DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  stu_name TEXT,
  email TEXT,
  github TEXT,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS assessments;

CREATE TABLE assessments (
  id SERIAL PRIMARY KEY,
  assess_name TEXT,
  type TEXT
);

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_name TEXT,
  type TEXT
);

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  group_name TEXT,
  student1 TEXT,
  student2 TEXT,
  student3 TEXT,
  student4 TEXT,
  student5 TEXT,
  student6 TEXT
);

DROP TABLE IF EXISTS assessment_scores;

CREATE TABLE assessment_scores (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
  grade INTEGER,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS project_scores;

CREATE TABLE project_scores (
  id SERIAL PRIMARY KEY,
  group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  grade INTEGER,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);
