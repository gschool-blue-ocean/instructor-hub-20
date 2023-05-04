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


seedStudents().then(() => pool.end());