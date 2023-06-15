import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const seedStuff = async () => {
  try {
    const seed = await pool.query(
      `INSERT INTO cohorts (cohort_number, start, graduation, instructor) VALUES 
        (19, '01/17/2023', '05/26/2023', 'Phil Witkin'),
        (20, '03/27/2023', '07/21/2023', 'Danny Andrews')`,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Cohorts Table successfully seeded.");
      }
    );
  } catch {
    console.error(error);
    console.log("Seeding Tables failed.");
  }
};

const cohortData = async function () {
  try {
    const seed = await pool.query(
      `INSERT INTO cohorts (cohort_number, start, graduation, instructor) VALUES 
        (19, '01/17/2023', '05/26/2023', 'Phil Witkin'),
        (20, '03/27/2023', '07/21/2023', 'Danny Andrews')`,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Cohorts Table successfully seeded.");
        pool.query(
          `INSERT INTO students (stu_name, email, github, cohort_id) VALUES 
            ('David Ortiz', 'Ortiz123@example.com', 'https://github.com/Ortiz1', 1),
            ('Billy Tomasello', 'Tomasello123@example.com', 'https://github.com/Tomasello1', 1),
            ('Jesthen Baez', 'Baez123@example.com', 'https://github.com/Baez1', 1),
            ('Shuyi Hoo', 'Hoo123@example.com', 'https://github.com/Hoo1', 1),
            ('Shawn Couch', 'Couch123@example.com', 'https://github.com/Couch1', 1),
            ('Tomas Corradini', 'Corradini123@example.com', 'https://github.com/Corradini1', 1),
            ('Salvatore Paucek', 'theohamill48@yahoo.com', 'https://github.com/darion31', 2),
            ('Clyde Welch', 'Trudie39@hotmail.com', 'https://github.com/Tyrese29', 2),
            ('Sonya Hermann', 'Lilly73@yahoo.com', 'https://github.com/Darby92', 2),
            ('Scott Bogan', 'boganator@gmail.com', 'https://github.com/Gus36', 2),
            ('Shelia Barrows', 'sbarrows1972@gmail.com', 'https://github.com/Alyson37', 2),
            ('Shane Metz', 'Smetzyboi88@yahoo.com', 'https://github.com/Rocio55', 2)`,
          (err) => {
            if (err) {
              console.log(err);
            }
            console.log("Students Table successfully seeded.");
            pool.query(
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
                ('React Assessment', 'Assessment')`,
              (err) => {
                if (err) {
                  console.log(err);
                }
                console.log("Assessments Table successfully seeded.");
                pool.query(
                  `INSERT INTO projects (project_name, type) VALUES 
                    ('Command Line Mystery', 'Solo'),
                    ('Guessing Game', 'Solo'),
                    ('MCSP Hack-a-Thon', 'Solo'),
                    ('Front-End Project', 'Solo'),
                    ('Back-End MVP Project', 'Solo'),
                    ('Checkerboard', 'Solo'),
                    ('Front End Capstone', 'Group'),
                    ('System Design Capstone', 'Group'),
                    ('Blue Ocean', 'Group')`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log("Projects Table successfully seeded.");
                    pool.query(
                      `INSERT INTO groups (group_name, student1, student2, student3, student4, student5, student6) VALUES 
                        ('Yoshi''s Angels', 'David Ortiz', 'Billy Tomasello', 'Jesthen Baez', 'Shuyi Hoo', 'Shawn Couch', 'Tomas Corradini'),
                        ('The 20-Somethings', 'Salvatore Paucek', 'Clyde Welch', 'Sonya Hermann', 'Scott Bogan', null, null)`,
                      (err) => {
                        if (err) {
                          console.log(err);
                        }
                        console.log("Groups Table successfully seeded.");
                        pool.query(
                          `INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES 
                            (2, 4, 100, 1),
                            (3, 5, 100, 1),
                            (4, 6, 100, 1),
                            (7, 4, 90, 2),
                            (8, 5, 90, 2),
                            (9, 6, 90, 2)`,
                          (err) => {
                            if (err) {
                              console.log(err);
                            }
                            console.log(
                              "Assessment Scores Table successfully seeded."
                            );
                            pool.query(
                              `INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES 
                                (1, 9, 100, 1),
                                (1, 8, 95, 1),
                                (1, 7, 95, 1),
                                (2, 8, 95, 2),
                                (2, 9, 90, 2),
                                (2, 7, 90, 2)`,
                              (err) => {
                                if (err) {
                                  console.log(err);
                                }
                                console.log(
                                  "Project Scores Table successfully seeded."
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Cohorts Table failed.");
  }
};

const studentData = async function () {
  try {
    await pool.query(
      `INSERT INTO students (stu_name, email, github, cohort_id) VALUES 
        ('David Ortiz', 'Ortiz123@example.com', 'https://github.com/Ortiz1', 1),
        ('Billy Tomasello', 'Tomasello123@example.com', 'https://github.com/Tomasello1', 1),
        ('Jesthen Baez', 'Baez123@example.com', 'https://github.com/Baez1', 1),
        ('Shuyi Hoo', 'Hoo123@example.com', 'https://github.com/Hoo1', 1),
        ('Shawn Couch', 'Couch123@example.com', 'https://github.com/Couch1', 1),
        ('Tomas Corradini', 'Corradini123@example.com', 'https://github.com/Corradini1', 1),
        ('Salvatore Paucek', 'theohamill48@yahoo.com', 'https://github.com/darion31', 2),
        ('Clyde Welch', 'Trudie39@hotmail.com', 'https://github.com/Tyrese29', 2),
        ('Sonya Hermann', 'Lilly73@yahoo.com', 'https://github.com/Darby92', 2),
        ('Scott Bogan', 'boganator@gmail.com', 'https://github.com/Gus36', 2),
        ('Shelia Barrows', 'sbarrows1972@gmail.com', 'https://github.com/Alyson37', 2),
        ('Shane Metz', 'Smetzyboi88@yahoo.com', 'https://github.com/Rocio55', 2)`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Students Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Students Table failed.");
  }
};

const assessData = async function () {
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
        ('React Assessment', 'Assessment')`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Assessments Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Assessments Table failed.");
  }
};

const projectData = async function () {
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
        ('Blue Ocean', 'Group')`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Projects Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Projects Table failed.");
  }
};

const groupData = async function () {
  try {
    await pool.query(
      `INSERT INTO groups (group_name, student1, student2, student3, student4, student5, student6) VALUES 
        ('Yoshi''s Angels', 'David Ortiz', 'Billy Tomasello', 'Jesthen Baez', 'Shuyi Hoo', 'Shawn Couch', 'Tomas Corradini'),
        ('The 20-Somethings', 'Salvatore Paucek', 'Clyde Welch', 'Sonya Hermann', 'Scott Bogan', null, null)`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Groups Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Groups Table failed.");
  }
};

const assessScoreData = async function () {
  try {
    await pool.query(
      `INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES 
        (2, 4, 100, 1),
        (3, 5, 100, 1),
        (4, 6, 100, 1),
        (7, 4, 90, 2),
        (8, 5, 90, 2),
        (9, 6, 90, 2)`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Assessment Scores Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Assessment Scores Table failed.");
  }
};

const projectScoreData = async function () {
  try {
    await pool.query(
      `INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES 
        (1, 9, 100, 1),
        (1, 8, 95, 1),
        (1, 7, 95, 1),
        (2, 8, 95, 2),
        (2, 9, 90, 2),
        (2, 7, 90, 2)`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("Project Scores Table successfully seeded.");
      }
    );
  } catch (error) {
    console.error(error);
    console.log("Seeding Project Scores Table failed.");
  }
};

async function seedData() {
  const cohort = await cohortData();
  // const assess = await assessData();
  // const project = await projectData();
  // const student = await studentData();
  // const group = await groupData();
  // const assessScore = await assessScoreData();
  // const projectScore = await projectScoreData();
}

seedData();

// cohortData().then(()=> studentData().then(()=> assessData().then(()=> projectData().then(()=> groupData().then(()=> assessScoreData().then(()=> projectScoreData()))))));
