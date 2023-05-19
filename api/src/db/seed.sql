INSERT INTO cohorts (cohort_number, start, graduation, instructor) VALUES (19, '01/17/2023', '05/26/2023', 'Phil Witkin');
INSERT INTO cohorts (cohort_number, start, graduation, instructor) VALUES (20, '03/27/2023', '07/21/2023', 'Danny Andrews');


INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('David Ortiz', 'Ortiz123@example.com', 'https://github.com/Ortiz1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Billy Tomasello', 'Tomasello123@example.com', 'https://github.com/Tomasello1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Jesthen Baez', 'Baez123@example.com', 'https://github.com/Baez1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Shuyi Hoo', 'Hoo123@example.com', 'https://github.com/Hoo1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Shawn Couch', 'Couch123@example.com', 'https://github.com/Couch1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Tomas Corradini', 'Corradini123@example.com', 'https://github.com/Corradini1', 1);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Salvatore Paucek', 'theohamill48@yahoo.com', 'https://github.com/darion31', 2);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Clyde Welch', 'Trudie39@hotmail.com', 'https://github.com/Tyrese29', 2);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Sonya Hermann', 'Lilly73@yahoo.com', 'https://github.com/Darby92', 2);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Scott Bogan', 'boganator@gmail.com', 'https://github.com/Gus36', 2);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Shelia Barrows', 'sbarrows1972@gmail.com', 'https://github.com/Alyson37', 2);
INSERT INTO students (stu_name, email, github, cohort_id) VALUES ('Shane Metz', 'Smetzyboi88@yahoo.com', 'https://github.com/Rocio55', 2);



INSERT INTO assessments (assess_name, type) VALUES ('DOM API Assessment', 'Assessment');
INSERT INTO assessments (assess_name, type) VALUES ('Data Types', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('Loops and Control Flow', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('Functions', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('Server and DB Assessment', 'Assessment');
INSERT INTO assessments (assess_name, type) VALUES ('Server Side Assessment', 'Assessment');
INSERT INTO assessments (assess_name, type) VALUES ('Event Listeners', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('Arrays', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('Objects', 'Checkpoint');
INSERT INTO assessments (assess_name, type) VALUES ('React Assessment', 'Assessment');


INSERT INTO projects (project_name, type) VALUES ('Command Line Mystery', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('Guessing Game', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('MCSP Hack-a-Thon', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('Front-End Project', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('Back-End MVP Project', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('Checkerboard', 'Solo');
INSERT INTO projects (project_name, type) VALUES ('Front End Capstone', 'Group');
INSERT INTO projects (project_name, type) VALUES ('System Design Capstone', 'Group');
INSERT INTO projects (project_name, type) VALUES ('Blue Ocean', 'Group');


INSERT INTO groups (group_name, student1, student2, student3, student4, student5, student6) VALUES ('Yoshi''s Angels', 'David Ortiz', 'Billy Tomasello', 'Jesthen Baez', 'Shuyi Hoo', 'Shawn Couch', 'Tomas Corradini');
INSERT INTO groups (group_name, student1, student2, student3, student4, student5, student6) VALUES ('The 20-Somethings', 'Salvatore Paucek', 'Clyde Welch', 'Sonya Hermann', 'Scott Bogan', null, null);


INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (2, 4, 100, 1);
INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (3, 5, 100, 1);
INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (4, 6, 100, 1);
INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (7, 4, 90, 2);
INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (8, 5, 90, 2);
INSERT INTO assessment_scores (student_id, assess_id, grade, cohort_id) VALUES (9, 6, 90, 2);


INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (1, 9, 100, 1);
INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (1, 8, 95, 1);
INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (1, 7, 95, 1);
INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (2, 8, 95, 2);
INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (2, 9, 90, 2);
INSERT INTO project_scores (group_id, project_id, grade, cohort_id) VALUES (2, 7, 90, 2);