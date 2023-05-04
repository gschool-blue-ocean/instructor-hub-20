import pg from "pg";
import { faker } from '@faker-js/faker';

const pool= new pg.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DB_PORT
});

const SEED_STUDENTS = 40;

const seedStudents = async () => {
    const students = [];
    for (let i = 0; i < SEED_STUDENTS; i++) {
        const gHub = faker.internet.userName();
        const cohortNum = (Math.random() > 0.5 ? 19 : 20)
        students.push({
            name: faker.name.fullName(),
            email: faker.internet.email(),
            github: `https://github.com/${gHub}`,
            cohort: cohortNum
        })
    }
    try {
        await pool.query('TRUNCATE TABLE students CASCADE');
        await pool.query('ALTER SEQUENCE products_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO students (stu_name, email, github, cohort_id) VALUES ($1, $2, $3, $4) RETURNING *';
        for (let i = 0; i < SEED_STUDENTS; i++) {
            console.log(`Seeded ${i+1} students!`);
            const { name, email, github, cohort } = students[i];
            await pool.query(queryString, [name, email, github, cohort])
        }
        console.log('Students seeded successfully');
    } catch (error) {
        console.error('Error seeding students:', error);
    }
}

const seedCohort = async () => {
    try {
        await pool.query(`INSERT INTO cohorts(cohort_number, start, graduation, instructor) VALUES 
        (19, '01/17/2023', '05/26/2023', 'Phil Witkin'),
        (20, '03/27/2023', '07/21/2023', 'Danny Andrews') RETURNING *`);
        console.log('Cohorts seeded successfully!')
    } catch (error) {
        console.error('Error seeding cohorts:', error);
    }
}

const seedAssessment = async () => {
    try {
        await pool.query(`INSERT INTO assessments(assess_name, type) VALUES 
        ('DOM API Assessment', 'Assessment'),
        ('Data Types', 'Checkpoint'),
        ('Loops and Control Flow', 'Checkpoint'),
        ('Functions', 'Checkpoint'),
        ('Server and DB Assessment', 'Assessment'),
        ('Server Side Assessment', 'Assessment'),
        ('Event Listeners', 'Checkpoint'),
        ('Arrays', 'Checkpoint'),
        ('Objects', 'Checkpoint'),
        ('React Assessment', 'Assessment') RETURNING *`);
        console.log('Assessments seeded successfully!')
    } catch (error) {
        console.error('Error seeding assessments:', error);
    }
}

const seedProject = async () => {
    try {
        await pool.query(`INSERT INTO projects(project_name, type) VALUES 
        ('Command Line Mystery', 'Solo'),
        ('Guessing Game', 'Solo'),
        ('MCSP Hack-a-Thon', 'Solo'),
        ('Front-End Project', 'Solo'),
        ('Back-End MVP Project', 'Solo'),
        ('Checkerboard', 'Solo'),
        ('Front End Capstone', 'Group'),
        ('System Design Capstone', 'Group'),
        ('Blue Ocean', 'Group') RETURNING *`);
        console.log('Projects seeded successfully!')
    } catch (error) {
        console.error('Error seeding projects:', error);
    }
}


seedStudents().then(()=> seedCohort().then(()=> seedAssessment().then(()=> seedProject().then(()=> pool.end()))));