import { test, expect, firefox } from "@playwright/test";

const API_URL = process.env.API_URL || "http://localhost:8000";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

//------------------Sign In------------------

test(`Sign In - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector('#sign-out-btn');
  const signedIn = await page.isVisible('#sign-out-btn');
  expect(signedIn).toBe(true);
  await browser.close();
});

//------------------Register------------------

test(`Register - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.click('#loginPage-register-button');
  await page.fill('[placeholder="First and Last Name"]', "test2");
  await page.fill('[placeholder="Email address"]', "test2@test.com");
  await page.fill('[placeholder="Set Password"]', "test");
  await page.fill('[placeholder="Verify Password"]', "test");
  const pageVisible = await page.isVisible('[placeholder="Verify Password"]');
  await page.click('#registerPage-register-button');
  await page.waitForSelector(".registered");
  const didRegister = await page.isVisible(".registered");
  expect(pageVisible).toBe(true);
  expect(didRegister).toBe(true);
  await browser.close();
  await fetch(`${API_URL}/users/test2`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
});

//------------------Sign Out------------------

test('sign out - firefox', async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector('#sign-out-btn');
  await page.click('#sign-out-btn');
  const signedOut = await page.isVisible('#login-button');
  expect(signedOut).toBe(true);
  await browser.close();
});

//------------------Invalid Sign In Attempt------------------

test(`Invalid Sign In Attempt - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "asdfghjkl@gmail.com");
  await page.fill('[placeholder="Password"]', "asdfghjkl");
  await page.click('#login-button');
  await page.waitForSelector(".error-text");
  const invalidlogin = await page.isVisible(".error-text");
  expect(invalidlogin).toBe(true);
  await browser.close();
});

//------------------Projects Button------------------

test(`projects button goes to projects dashboard - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector("#projects");
  await page.click("#projects");
  const studentsIsVisible = await page.isVisible('#add-project-btn');
  expect(studentsIsVisible).toBe(true);
  await browser.close();
});

//------------------Students Button------------------

test(`students button goes to students dashboard - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector("#students");
  await page.click("#students");
  const studentsIsVisible = await page.isVisible('#add-student-btn');
  expect(studentsIsVisible).toBe(true);
  await browser.close();
});

//------------------Home Button------------------

test(`home button goes back to home dashboard - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector("#students");
  await page.click("#students");
  const studentsIsVisible = await page.isVisible('#add-student-btn');
  await page.click("#home");
  const homePageIsVisible = await page.getByText('Average Grades').isVisible();
  expect(studentsIsVisible).toBe(true);
  expect(homePageIsVisible).toBe(true);
  await browser.close();
});

//------------------Assessments Button------------------

test(`assessments button goes to assessments dashboard - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector("#assessments");
  await page.click("#assessments");
  const assessmentsIsVisible = await page.isVisible('#add-assessment-btn');
  expect(assessmentsIsVisible).toBe(true);
  await browser.close();
});

//------------------Change Cohorts From Modal------------------

test(`change cohorts from the modal - firefox`, async () => {
  test.setTimeout(90000);
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('#login-button');
  await page.waitForSelector("#home");
  await page.click('#change-cohort-btn');
  await page.waitForSelector('#modal20');
  await page.click('#modal20')
  await page.click('#exit-btn')
  const differentCohort = await page.getByText('MCSP - 20').isVisible();
  expect(differentCohort).toBe(true);
  await browser.close();
});
