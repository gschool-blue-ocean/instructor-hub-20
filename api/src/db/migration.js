const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


const users = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS users CASCADE`, (err, data)=>{
            if (err){
                console.log('Drop Users Table failed')
            }
            pool.query(`CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT,
            password TEXT,
            email TEXT,
            admin BOOLEAN)`, (err, data)=>{
                console.log('Create Users Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log("Create Users Table failed");
    }
};


const cohorts = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS cohorts CASCADE`, (err, data)=>{
            if (err){
                console.log('Drop Cohorts Table failed')
            }
            pool.query(`CREATE TABLE cohorts (
            id SERIAL PRIMARY KEY,
            cohort_number INTEGER,
            start TEXT,
            graduation TEXT,
            instructor TEXT)`, (err, data)=>{
                console.log('Create Cohorts Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log("Create Cohorts Table failed");
    }
};


const students = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS students CASCADE`, (err, data)=>{
            if (err){
                console.log('Drop Students Table failed');
            }
            pool.query(`CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            stu_name TEXT,
            email TEXT,
            github TEXT,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                console.log('Create Students Table successful');
            })
        })
    } catch (error) {
        console.error(error);
        console.log('Create Students Table failed');
    } 
};


const assessments = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS assessments`, (err, data)=>{
            if (err){
                console.log('Drop Assessments Table failed');
            }
            pool.query(`CREATE TABLE assessments (
            id serial PRIMARY KEY,
            assess_name TEXT,
            type TEXT)`, (err, data)=>{
                console.log('Create Assessments Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Assessments Table failed');
    }
};


const projects = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS projects`, (err, data)=>{
            if (err){
                console.log('Drop Projects Table failed');
            }
            pool.query(`CREATE TABLE projects (
            id serial PRIMARY KEY,
            project_name TEXT,
            type TEXT)`, (err, data)=>{
                console.log('Create Projects Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Projects Table failed');
    }
};


const groups = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS groups`, (err, data)=>{
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
                console.log('Create Groups Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Groups Table failed');
    }
};


const assessScores = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS assessment_scores`, (err, data)=>{
            if (err){
                console.log('Drop Assessment Scores Table failed');
            }
            pool.query(`CREATE TABLE assessment_scores (
            id serial PRIMARY KEY,
            student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
            assess_id INTEGER REFERENCES assessments(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                console.log('Create Assessment Scores Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Assessment Scores Table failed');
    }
};


const projectScores = async function() {
    try {
        await pool.query(`DROP TABLE IF EXISTS project_scores`, (err, data)=>{
            if (err){
                console.log('Drop Project Scores Table failed');
            }
            pool.query(`CREATE TABLE project_scores (
            id serial PRIMARY KEY,
            group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
            project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
            grade INTEGER,
            cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE)`, (err, data)=>{
                console.log('Create Project Scores Table successful');
            })
        });
    } catch (error) {
        console.error(error);
        console.log('Create Project Scores Table failed');
    }
};
        

users().then(()=> cohorts().then(()=> students().then(()=> assessments().then(()=> projects().then(
    ()=> groups().then(()=> assessScores().then(()=> projectScores().then(()=> pool.end()))))))));