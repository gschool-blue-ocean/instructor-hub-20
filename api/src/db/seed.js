import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
const userData = async () => {
  try {
    await pool.query(
      `INSERT INTO users(name, email, password) VALUES
('Phil Witkin', 'pwitkins@hotmail.com', 'G3tP@1d'),
('Danny Andrews', 'dannyphantom@yahoo.com', 'Gh0stinthe$h3ll')`
    );
    console.log("Users Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Users Table failed.");
  }
};
const cohortData = async () => {
  try {
    await pool.query(
      `INSERT INTO cohorts (cohort_number, start, graduation, user_id) VALUES
(19, '2023-01-17', '2023-05-26', 1),
(20, '2023-03-27', '2023-07-21', 2)`
    );
    console.log("Cohorts Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Cohorts Table failed.");
  }
};
const studentData = async () => {
  try {
    await pool.query(
      `INSERT INTO students (stu_name, email, github, cohort_id) VALUES
('David Ortiz', 'Ortiz123@example.com', 'Ortiz1', 1),
('Billy Tomasello', 'Tomasello123@example.com', 'Tomasello1', 1),
('Jesthen Baez', 'Baez123@example.com', 'Baez1', 1),
('Shuyi Hoo', 'Hoo123@example.com', 'Hoo1', 1),
('Shawn Couch', 'Couch123@example.com', 'Couch1', 1),
('Tomas Corradini', 'Corradini123@example.com', 'Corradini1', 1),
('Salvatore Paucek', 'theohamill48@yahoo.com', 'darion31', 2),
('Clyde Welch', 'Trudie39@hotmail.com', 'Tyrese29', 2),
('Sonya Hermann', 'Lilly73@yahoo.com', 'Darby92', 2),
('Scott Bogan', 'boganator@gmail.com', 'Gus36', 2),
('Shelia Barrows', 'sbarrows1972@gmail.com', 'Alyson37', 2),
('Shane Metz', 'Smetzyboi88@yahoo.com', 'Rocio55', 2)`
    );
    console.log("Students Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Students Table failed.");
  }
};
const assessData = async () => {
  try {
    await pool.query(
      `INSERT INTO assessments (assess_name, type) VALUES
        ('DOM API Assessment', 'Assessment'),
        ('Data Types', 'Checkpoint'),
        ('Loops and Control Flow', 'Checkpoint'),
        ('Functions', 'Checkpoint'),
        ('Server and DB Assessment', 'Assessment'),
        ('Server Side Assessment', 'Assessment'),
        ('Event Listeners', 'Checkpoint'),
        ('Arrays', 'Checkpoint'),
        ('Objects', 'Checkpoint'),
        ('React Assessment', 'Assessment')`
    );
    console.log("Assessments Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Assessments Table failed.");
  }
};
const projectData = async () => {
  try {
    await pool.query(
      `INSERT INTO projects (project_name, type) VALUES
        ('Command Line Mystery', 'Solo'),
        ('Guessing Game', 'Solo'),
        ('MCSP Hack-a-Thon', 'Solo'),
        ('Front-End Project', 'Solo'),
        ('Back-End MVP Project', 'Solo'),
        ('Checkerboard', 'Solo'),
        ('Front End Capstone', 'Group'),
        ('System Design Capstone', 'Group'),
        ('Blue Ocean', 'Group')`
    );
    console.log("Projects Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Projects Table failed.");
  }
};
const groupData = async () => {
  try {
    await pool.query(
      `INSERT INTO groups (group_name, project_id) VALUES
('Yoshi''s Angels', 7),
('The 20-Somethings', 7),
('The Rockers', 8),
('Four-Stars', 8),
('Gamblers', 9),
('Sourcers', 9) `
    );
    console.log("Groups Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Groups Table failed.");
  }
};
const assessScoreData = async () => {
  try {
    await pool.query(
      `INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 1, 90),
(2, 1, 85),
(3, 1, 88),
(4, 1, 92),
(5, 1, 91),
(6, 1, 87),
(7, 1, 84),
(8, 1, 89),
(9, 1, 86),
(10, 1, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 2, 88),
(2, 2, 92),
(3, 2, 86),
(4, 2, 89),
(5, 2, 90),
(6, 2, 85),
(7, 2, 87),
(8, 2, 91),
(9, 2, 84),
(10, 2, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 3, 90),
(2, 3, 85),
(3, 3, 88),
(4, 3, 92),
(5, 3, 91),
(6, 3, 87),
(7, 3, 84),
(8, 3, 89),
(9, 3, 86),
(10, 3, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 4, 88),
(2, 4, 92),
(3, 4, 86),
(4, 4, 89),
(5, 4, 90),
(6, 4, 85),
(7, 4, 87),
(8, 4, 91),
(9, 4, 84),
(10, 4, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 5, 90),
(2, 5, 85),
(3, 5, 88),
(4, 5, 92),
(5, 5, 91),
(6, 5, 87),
(7, 5, 84),
(8, 5, 89),
(9, 5, 86),
(10, 5, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 6, 88),
(2, 6, 92),
(3, 6, 86),
(4, 6, 89),
(5, 6, 90),
(6, 6, 85),
(7, 6, 87),
(8, 6, 91),
(9, 6, 84),
(10, 6, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 7, 90),
(2, 7, 85),
(3, 7, 88),
(4, 7, 92),
(5, 7, 91),
(6, 7, 87),
(7, 7, 84),
(8, 7, 89),
(9, 7, 86),
(10, 7, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 8, 88),
(2, 8, 92),
(3, 8, 86),
(4, 8, 89),
(5, 8, 90),
(6, 8, 85),
(7, 8, 87),
(8, 8, 91),
(9, 8, 84),
(10, 8, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 9, 90),
(2, 9, 85),
(3, 9, 88),
(4, 9, 92),
(5, 9, 91),
(6, 9, 87),
(7, 9, 84),
(8, 9, 89),
(9, 9, 86),
(10, 9, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 10, 88),
(2, 10, 92),
(3, 10, 86),
(4, 10, 89),
(5, 10, 90),
(6, 10, 85),
(7, 10, 87),
(8, 10, 91),
(9, 10, 84),
(10, 10, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 11, 90),
(2, 11, 85),
(3, 11, 88),
(4, 11, 92),
(5, 11, 91),
(6, 11, 87),
(7, 11, 84),
(8, 11, 89),
(9, 11, 86),
(10, 11, 93);
INSERT INTO student_assessment_scores (assess_id, student_id, grade) VALUES
(1, 12, 88),
(2, 12, 92),
(3, 12, 86),
(4, 12, 89),
(5, 12, 90),
(6, 12, 85),
(7, 12, 87),
(8, 12, 91),
(9, 12, 84),
(10, 12, 93);
`
    );
    console.log("Assessment Scores Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Assessment Scores Table failed.");
  }
};
const projectScoreData = async () => {
  try {
    await pool.query(
      `
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (1, null, 1, ROUND(RANDOM() * 5) + 90),
  (1, null, 2, ROUND(RANDOM() * 5) + 80),
  (1, null, 3, ROUND(RANDOM() * 5) + 85),
  (1, null, 4, ROUND(RANDOM() * 5) + 85),
  (1, null, 5, ROUND(RANDOM() * 5) + 90),
  (1, null, 6, ROUND(RANDOM() * 5) + 80),
  (1, 1, 7, 98), -- Front End Capstone
  (1, 3, 8, 87), -- System Design Capstone
  (1, 5, 9, 96); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (2, null, 1, ROUND(RANDOM() * 5) + 90),
  (2, null, 2, ROUND(RANDOM() * 5) + 80),
  (2, null, 3, ROUND(RANDOM() * 5) + 85),
  (2, null, 4, ROUND(RANDOM() * 5) + 85),
  (2, null, 5, ROUND(RANDOM() * 5) + 90),
  (2, null, 6, ROUND(RANDOM() * 5) + 80),
  (2, 2, 7, 95), -- Front End Capstone
  (2, 3, 8, 87), -- System Design Capstone
  (2, 5, 9, 96); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (3, null, 1, ROUND(RANDOM() * 5) + 90),
  (3, null, 2, ROUND(RANDOM() * 5) + 80),
  (3, null, 3, ROUND(RANDOM() * 5) + 85),
  (3, null, 4, ROUND(RANDOM() * 5) + 85),
  (3, null, 5, ROUND(RANDOM() * 5) + 90),
  (3, null, 6, ROUND(RANDOM() * 5) + 80),
  (3, 2, 7, 95), -- Front End Capstone
  (3, 1, 8, 87), -- System Design Capstone
  (3, 6, 9, 97); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (4, null, 1, ROUND(RANDOM() * 5) + 90),
  (4, null, 2, ROUND(RANDOM() * 5) + 80),
  (4, null, 3, ROUND(RANDOM() * 5) + 85),
  (4, null, 4, ROUND(RANDOM() * 5) + 85),
  (4, null, 5, ROUND(RANDOM() * 5) + 90),
  (4, null, 6, ROUND(RANDOM() * 5) + 80),
  (4, 1, 7, 98), -- Front End Capstone
  (4, 1, 8, 90), -- System Design Capstone
  (4, 5, 9, 96); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (5, null, 1, ROUND(RANDOM() * 5) + 90),
  (5, null, 2, ROUND(RANDOM() * 5) + 80),
  (5, null, 3, ROUND(RANDOM() * 5) + 85),
  (5, null, 4, ROUND(RANDOM() * 5) + 85),
  (5, null, 5, ROUND(RANDOM() * 5) + 90),
  (5, null, 6, ROUND(RANDOM() * 5) + 80),
  (5, 1, 7, 98), -- Front End Capstone
  (5, 1, 8, 90), -- System Design Capstone
  (5, 6, 9, 97); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (6, null, 1, ROUND(RANDOM() * 5) + 90),
  (6, null, 2, ROUND(RANDOM() * 5) + 80),
  (6, null, 3, ROUND(RANDOM() * 5) + 85),
  (6, null, 4, ROUND(RANDOM() * 5) + 85),
  (6, null, 5, ROUND(RANDOM() * 5) + 90),
  (6, null, 6, ROUND(RANDOM() * 5) + 80),
  (6, 2, 7, 95), -- Front End Capstone
  (6, 1, 8, 90), -- System Design Capstone
  (6, 6, 9, 97); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (7, null, 1, ROUND(RANDOM() * 5) + 90),
  (7, null, 2, ROUND(RANDOM() * 5) + 80),
  (7, null, 3, ROUND(RANDOM() * 5) + 85),
  (7, null, 4, ROUND(RANDOM() * 5) + 85),
  (7, null, 5, ROUND(RANDOM() * 5) + 90),
  (7, null, 6, ROUND(RANDOM() * 5) + 80),
  (7, 2, 7, 93), -- Front End Capstone
  (7, 1, 8, 90), -- System Design Capstone
  (7, 5, 9, 95); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (8, null, 1, ROUND(RANDOM() * 5) + 90),
  (8, null, 2, ROUND(RANDOM() * 5) + 80),
  (8, null, 3, ROUND(RANDOM() * 5) + 85),
  (8, null, 4, ROUND(RANDOM() * 5) + 85),
  (8, null, 5, ROUND(RANDOM() * 5) + 90),
  (8, null, 6, ROUND(RANDOM() * 5) + 80),
  (8, 1, 7, 95), -- Front End Capstone
  (8, 1, 8, 90), -- System Design Capstone
  (8, 6, 9, 91); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (9, null, 1, ROUND(RANDOM() * 5) + 90),
  (9, null, 2, ROUND(RANDOM() * 5) + 80),
  (9, null, 3, ROUND(RANDOM() * 5) + 85),
  (9, null, 4, ROUND(RANDOM() * 5) + 85),
  (9, null, 5, ROUND(RANDOM() * 5) + 90),
  (9, null, 6, ROUND(RANDOM() * 5) + 80),
  (9, 2, 7, 93), -- Front End Capstone
  (9, 1, 8, 92), -- System Design Capstone
  (9, 6, 9, 91); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (10, null, 1, ROUND(RANDOM() * 5) + 90),
  (10, null, 2, ROUND(RANDOM() * 5) + 80),
  (10, null, 3, ROUND(RANDOM() * 5) + 85),
  (10, null, 4, ROUND(RANDOM() * 5) + 85),
  (10, null, 5, ROUND(RANDOM() * 5) + 90),
  (10, null, 6, ROUND(RANDOM() * 5) + 80),
  (10, 2, 7, 93), -- Front End Capstone
  (10, 1, 8, 92), -- System Design Capstone
  (10, 6, 9, 91); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (11, null, 1, ROUND(RANDOM() * 5) + 90),
  (11, null, 2, ROUND(RANDOM() * 5) + 80),
  (11, null, 3, ROUND(RANDOM() * 5) + 85),
  (11, null, 4, ROUND(RANDOM() * 5) + 85),
  (11, null, 5, ROUND(RANDOM() * 5) + 90),
  (11, null, 6, ROUND(RANDOM() * 5) + 80),
  (11, 1, 7, 95), -- Front End Capstone
  (11, 1, 8, 90), -- System Design Capstone
  (11, 5, 9, 95); -- Blue Ocean
INSERT INTO student_project_scores (student_id, group_id, project_id, grade) VALUES
  (12, null, 1, ROUND(RANDOM() * 5) + 90),
  (12, null, 2, ROUND(RANDOM() * 5) + 80),
  (12, null, 3, ROUND(RANDOM() * 5) + 85),
  (12, null, 4, ROUND(RANDOM() * 5) + 85),
  (12, null, 5, ROUND(RANDOM() * 5) + 90),
  (12, null, 6, ROUND(RANDOM() * 5) + 80),
  (12, 1, 7, 95), -- Front End Capstone
  (12, 1, 8, 92), -- System Design Capstone
  (12, 5, 9, 95); -- Blue Ocean`
    );
    console.log("Project Scores Table successfully seeded.");
  } catch (error) {
    console.error(error);
    console.log("Seeding Project Scores Table failed.");
  }
};
async function seedData() {
  try {
    await userData();
    await cohortData();
    await studentData();
    await assessData();
    await projectData();
    await groupData();
    await assessScoreData();
    await projectScoreData();
  } catch (error) {
    console.error(error);
  }
}
seedData();
