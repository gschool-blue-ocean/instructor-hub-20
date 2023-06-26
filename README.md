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
- Architecture Manager: Alex Peterec, Kendall Boone, and Weson Hilgenfeld

Working together as an Agile group, we worked hard to redesign this application visually and functionally per our client's needs. We've reworked the authentication system that correctly stores hashed passwords in the database and keeps the user logged in, reworked the whole UI to fit the clients needs, and cleaned up the entire database for seamless expereince.

## Technologies Used

- HTML5, CSS3, JavaScript, express.js, node.js,
- React, react-router, react-auth,
- jest, Vitest, Playwright,
- Docker, PostgreSQL, Git, NPM,
- Visual Studio Code, Github Projects,
- Discord, Slack, Zoom

## Features

- Login Authentication with hashed passwords stored in the database
- Central hub to view and manage all students and cohorts/classes
- Incorporate dynamic charts to measure metrics
- Ability to update and manage individualized assessment data

## Screenshot(s)

### Login

![Login](/documentation/images/mcsp-20/login.png)
![Create_Account](/documentation/images/mcsp-20/create_account.png)

### Dashboard

![Dashboard](/documentation/images/mcsp-20/dashboard.png)

### Interview

![Interview](/documentation/images/mcsp-20/interview.png)

## Setup

- Fork and clone this repository
- From the root directory of the cloned repository
  - npm install
  - npm install --prefix api
  - npm install --prefix client
  - `cp .env.example .env` - Copy over required environment variables.
  - `docker-compose up -d` - Run Project.
    > **NOTE**: After installing a new npm dependency, you have to run `docker-compose up --build` to install the new dependencies on the container.
- Point your browser to
  - [https://instructor-hub-20.onrender.com/](https://instructor-hub-20.onrender.com/)

[Project Demonstration](deployment_link_will_go_here_when_complete)

## Usage

- Click on Register button
- Type in all your info and provide a valid password
- Click Submit
- Type in your email and password and Click Login to explore the dashboard

## Current Status

> Sprint 1 of 2 Complete

## Room For Improvement

- Ideas:
  - Adding a scalable option
- Todo:
  - deployment

## Acknowledgements

- Inspired By:
  - Our instructors, all of our hard work, and the hard work of previous cohorts
- Based On:
  - Galvanize Inc. Admissions Hub assignment
- Contributors:
  - Jacob Phillips, Tailon Dow, Israr Ali, Alex Peterec, Kendall Boone, and Weson Hilgenfeld
