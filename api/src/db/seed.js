import pg from "pg";
import { faker } from '@faker-js/faker';

const pool= new pg.Pool({ connectionString: process.env.DATABASE_URL });
const host = "http://localhost:8000";

const SEED_STUDENTS = 40;

const seedStudents = async () => {
    const students = [];
    for (let i = 0; i < SEED_STUDENTS; i++) {
        const gHub = faker.internet.userName();
        const cohortNum = (Math.random() > 0.5 ? 1 : 2)
        students.push({
            name: faker.name.fullName(),
            email: faker.internet.email(),
            github: `https://github.com/${gHub}`,
            cohort: cohortNum
        })
    }
    
    for (let i = 0; i < SEED_STUDENTS; i++) {
        // console.log(`Seeded ${i+1} students!`);
        try {
            const response = await fetch(`${host}/api/students`, 
            {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(students[i])
            });
            const data = await response.json();
            console.log(data);
            console.log('Seed successful');
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    }
    console.log('Students seeded successfully');
}


seedStudents().then(()=> pool.end());