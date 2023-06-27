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
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAF)

### Back-End
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Testing
- ![jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white) Vitest | Playwright

### Authentication
- ![jwt](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink) bcrypt | react-auth

### Deployment
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![github_actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) Render 

### Version Control
- ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Workflow/Communication
- ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)  Github Projects

### Formatting
- ![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

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
	- The tests automatically run when running `docker-compose up`
	- The tests results can be viewed in the instructor-hub-20_tests_1 container log
	- To run the test again:
    		- Make sure that all the other containers are running first
		- Start up the test container from Docker Desktop
		- Or run `docker start instructor-hub-20_tests_1` in the terminal
- ### Running Unit Test
	- To run the unit test for the server
 	````
  	cd api/
  	npm i
  	npm run test
  	````
  - This will show all the tests for each of the routes.  There will also be a coverage section at the end of the test. This shows the percentage of all the test that passed and failed and what portion of the test files were successful. 


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
  - Implemnting Redis for cahcing the database
  - Adding search feature to the homepage
  - Updating the homepage:
  	- Having a legend for the charts
  	- Showing multiple charts for each assessment and project

## Acknowledgements

- Inspired By:
  - Our instructors, all of our hard work, and the hard work of previous cohorts
- Based On:
  - Galvanize Inc. Instructor Hub assignment
- Contributors:
  - Tailon Dow - github: [@tdow520](https://github.com/TDow520)  LinkedIn: [@tailon-dow](https://www.linkedin.com/in/tailon-dow/)
  - Jacob Phillips - github: [@jacobrphillips](https://github.com/jacobrphillips)  LinkedIn [@jacobphillips-dev](https://www.linkedin.com/in/jacobphillips-dev/)
  - Israr Ali - github: [@israr2468](https://github.com/israr2468)  LinkedIn: [@israrali-](https://www.linkedin.com/in/israrali-/)
  - Alex Peterec - github: [@tpeterec](https://github.com/tpeterec)  LinkedIn: [@tapeterec](https://www.linkedin.com/in/tapeterec/)  Medium: [@thomaspeterec](https://medium.com/@thomaspeterec)
  - Kendall Boone - github: [@legacyunlimited](https://github.com/legacyunlimited)  LinkedIn: [@kendall-boone](https://www.linkedin.com/in/kendall-boone/)
  - Weston Hilgenfeld - github: [@Rusty12321](https://github.com/Rusty12321)  LinkedIn: [@westonhilgenfeld](https://www.linkedin.com/in/westonhilgenfeld/)

