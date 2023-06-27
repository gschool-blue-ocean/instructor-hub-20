# Full-Stack React Example

# Instructor Hub

> Agile group project to rework an instructor hub to track incoming students and their progress into the Galvanize program.

## Table of Contents

- [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Current Status](#current-status)
- [Room For Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)

## General Information

This project is the culmination of months of hard work growing our skills within the Galvanize course. We came together as a team to rework an existing project from a previous cohort in order to meet the demands of a client.

- Project Manager: Tailon Dow
- UI Manager: Jacob Phillips and Israr Ali
- Architecture Manager: Alex Peterec, Kendall Boone, and Weston Hilgenfeld

Working together as an Agile group, we worked hard to redesign this application visually and functionally per our client's needs. We've reworked the authentication system that correctly stores hashed passwords in the database and keeps the user logged in, reworked the whole UI to fit the clients needs, and cleaned up the entire database for seamless expereince.

## Technologies Used

### Front-End
- HTML5, CSS3, React

### Back-End
- Node.js, Express.js, PostgreSQL

### Testing
- jest, Vitest, Playwright

### Authentication
- react-auth, jwt, bcrypt

### Deployment
- Docker, Render

### Version Control
- Git, npm

### Workflow/Communication
- Github Projects, Discord, Slack, Zoom

## Features

- Login Authentication with hashed passwords stored in the database
- Central hub to view and manage all students and cohorts/classes
- Incorporate dynamic charts to measure metrics
- Ability to update and manage individualized assessment data

## Screenshot(s)

### Login

![Login](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/221a658d-77f4-4532-8607-defd20ae346d)

![Create_Account](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/c9815872-dddc-40cd-9dc0-1d15c7f1f045)

### Dashboard

![Dashboard](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/73214644-1cde-4372-8426-7b1c1c4a21cd)
 
![Student Dashboard](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/f514dee6-94b2-43ff-8daa-7139ab1462ed)

![Edit Student](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/ffe12a08-f2d1-4646-a0ba-0204f731c33f)

![Change Cohort](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/96124ed9-235e-4e86-a375-c0604a321dc5)


## Original Project 

![Dashboard](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/4b4a108c-2b8e-4b94-b6f5-1fac12f1bf80)

![Assessment Modal](https://github.com/gschool-blue-ocean/instructor-hub-20/assets/121460844/828ae242-f946-4e12-a5e8-b978aaf115c1)


## Setup

- Fork and clone this repository
- From the root directory of the cloned repository
  - npm install
  - npm install --prefix api
  - npm install --prefix client
  - `cp .env.example .env` - Copy over required environment variables.
  - `docker-compose up` - Run Project.
    > **NOTE**: After installing a new npm dependency, you have to run `docker-compose up --build` to install the new dependencies on the container.
- Point your browser to
  - [https://instructor-hub-20.onrender.com/](https://instructor-hub-20.onrender.com/)
- Run Playwright tests
	- The tests automatically run when running `docker-compose up -d`
  - You can run just `docker-compose up` to run the containers and see the logs in the terminal
	- The tests results can be viewed in the instructor-hub-20_tests_1 container log
	- To run the test again:
    - Make sure that all the other containers are running first
		- Start up the test container from Docker Desktop
		- Or `run docker start instructor-hub-20_tests_1` in the terminal


[Project Demonstration](https://instructor-hub-20.onrender.com/)

## Usage

- Click on Register button
- Type in all your info and provide a valid password
- Click Submit
- Type in your email and password and Click Login to explore the dashboard

## Current Status

> Completed Project

## Room For Improvement

- Ideas:
  - Adding a scalable option
- To-Do:
  - Present Project

## Acknowledgements

- Inspired By:
  - Our instructors, all of our hard work, and the hard work of previous cohorts
- Based On:
  - Galvanize Inc. Admissions Hub assignment
- Contributors:
  - Jacob Phillips, Tailon Dow, Israr Ali, Alex Peterec, Kendall Boone, and Weston Hilgenfeld

