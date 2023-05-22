import pg from "pg";


const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


const clearTables = async () => {
    try {
        const user = await pool.query('Drop TABLE IF EXISTS users');
        const cohort = await pool.query('Drop TABLE IF EXISTS cohorts');
        const student = await pool.query('Drop TABLE IF EXISTS students');
        const project = await pool.query('Drop TABLE IF EXISTS projects');
        const assessment = await pool.query('Drop TABLE IF EXISTS assessments');
        const group = await pool.query('Drop TABLE IF EXISTS groups');
        const assessScore = await pool.query('Drop TABLE IF EXISTS assessment_scores');
        const projScore = await pool.query('Drop TABLE IF EXISTS project_scores');
    } catch (error) {
        console.error(error);
        console.log("Drop Tables failed");
    }
}


const migrateTables = async () => {
    try {
        const cohort = await pool.query(`CREATE TABLE cohorts (
            id SERIAL PRIMARY KEY,
            cohort_number INTEGER,
            start TEXT,
            graduation TEXT,
            instructor TEXT)`);
        const user = await pool.query(`CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT,
            password TEXT,
            email TEXT,
            admin BOOLEAN)`);
        const student = await pool.query(`CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            stu_name TEXT,
            email TEXT,
            github TEXT,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`);
        const group = await pool.query(`CREATE TABLE groups (
            id serial PRIMARY KEY,
            group_name TEXT,
            student1 TEXT,
            student2 TEXT,
            student3 TEXT,
            student4 TEXT,
            student5 TEXT,
            student6 TEXT)`);
        const assessment = await pool.query(`CREATE TABLE assessments (
            id serial PRIMARY KEY,
            assess_name TEXT,
            type TEXT)`);
        const project = await pool.query(`CREATE TABLE projects (
            id serial PRIMARY KEY,
            project_name TEXT,
            type TEXT)`);
        const assessScore = await pool.query(`CREATE TABLE assessment_scores (
            id serial PRIMARY KEY,
            student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
            assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`);
        const projScore = await pool.query(`CREATE TABLE project_scores (
            id serial PRIMARY KEY,
            group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
            project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`);
    } catch (error) {
        console.error(error);
        console.log("Create Tables failed");
    }
    
}

const users = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS users`, (err, data)=>{
            if (err){
                console.log('Drop Users Table failed')
            }
            pool.query(`CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT,
            password TEXT,
            email TEXT,
            admin BOOLEAN)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Users Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log("Create Users Table failed");
    }
};


const cohorts = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS cohorts`, (err, data)=>{
            if (err){
                console.log('Drop Cohorts Table failed')
            }
            pool.query(`CREATE TABLE cohorts (
            id SERIAL PRIMARY KEY,
            cohort_number INTEGER,
            start TEXT,
            graduation TEXT,
            instructor TEXT)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Cohorts Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log("Create Cohorts Table failed");
    }
};


const students = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS students`, (err, data)=>{
            if (err){
                console.log('Drop Students Table failed');
            }
            pool.query(`CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            stu_name TEXT,
            email TEXT,
            github TEXT,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Students Table successful');
            })
        })
    } catch (error) {
        console.error(error);
        console.log('Create Students Table failed');
    } 
};


const assessments = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS assessments`, (err, data)=>{
            if (err){
                console.log('Drop Assessments Table failed');
            }
            pool.query(`CREATE TABLE assessments (
            id serial PRIMARY KEY,
            assess_name TEXT,
            type TEXT)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Assessments Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Assessments Table failed');
    }
};


const projects = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS projects`, (err, data)=>{
            if (err){
                console.log('Drop Projects Table failed');
            }
            pool.query(`CREATE TABLE projects (
            id serial PRIMARY KEY,
            project_name TEXT,
            type TEXT)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Projects Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Projects Table failed');
    }
};


const groups = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS groups`, (err, data)=>{
            if (err){
                console.log('Drop Groups Table failed');
            }
            pool.query(`CREATE TABLE groups (
            id serial PRIMARY KEY,
            group_name TEXT,
            student1 TEXT,
            student2 TEXT,
            student3 TEXT,
            student4 TEXT,
            student5 TEXT,
            student6 TEXT)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Groups Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Groups Table failed');
    }
};


const assessScores = function() {
    try {
        pool.query(`DROP TABLE IF EXISTS assessment_scores`, (err, data)=>{
            if (err){
                console.log('Drop Assessment Scores Table failed');
            }
            pool.query(`CREATE TABLE assessment_scores (
            id serial PRIMARY KEY,
            student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
            assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Assessment Scores Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Assessment Scores Table failed');
    }
};


function projectScores() {
    try {
        pool.query(`DROP TABLE IF EXISTS project_scores`, (err, data)=>{
            if (err){
                console.log('Drop Project Scores Table failed');
            }
            pool.query(`CREATE TABLE project_scores (
            id serial PRIMARY KEY,
            group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
            project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                if (err) {
                    console.log(err);
                }
                console.log('Create Project Scores Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Project Scores Table failed');
    }
};
        

async function fullMigration() {
    const cohort = await clearTables();
    const user = await migrateTables();
}

fullMigration();



// cohorts()
// .then(()=> users()
// .then(()=> groups()
// .then(()=> students()
// .then(()=> projects()
// .then(()=> assessments()
// .then(()=> projectScores()
// .then(()=> assessScores())))))));