import { test, expect } from '@playwright/test';

//variables representing user input
const nameInput = 'test name';
const emailInput = 'test@test.com';
const githubInput = 'testGithub';

test('user data shows up in the cohort table', async ({ page }) => {
    // will need to preface with the authentication modal
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Email Address').click();
await page.getByPlaceholder('Email Address').fill('fdsafa');
await page.getByPlaceholder('Email Address').press('Tab');
await page.getByPlaceholder('Password').fill('jklsa;df');
await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Add Student' }).click();
  const seeStudentModal = await page.isVisible('.student-modal-form')
    if(!seeStudentModal){
            throw new Error('Add student modal did not appear')
        }
// should be able to hit cancel button at any time that the user wants to drop the window, regadless of what info they have filled out
// user should be able to 
  await page.getByPlaceholder('name...').click();
  const nameValue = await page.getByPlaceholder('name...').fill(nameInput);
  await page.getByPlaceholder('name...').press('Tab');
  // make sure tab moves to the next column
 const emailValue = await page.getByPlaceholder('email...').fill(emailInput);
  await page.getByPlaceholder('email...').press('Tab');
  // make sure tab moves to the next column
 const githubValue =  await page.getByPlaceholder('github...').fill(githubInput);
//make sure user input shows up in the table for the appropriate cohort
// Make sure user input shows up in the table for the appropriate cohort
    if (await page.isVisible(`text= ${nameInput}`) &&
     await page.isVisible(`text=${emailInput}`) &&
     await page.isVisible(`text= ${githubInput}`)){}
});

test('sign in', async ({ page }) => {
  // will need to preface with the authentication modal
await page.goto('http://localhost:3000/');
await page.getByPlaceholder('Email Address').click();
await page.getByPlaceholder('Email Address').fill('fdsafa');
await page.getByPlaceholder('Email Address').press('Tab');
await page.getByPlaceholder('Password').fill('jklsa;df');
await page.getByRole('button', { name: 'Sign In' }).click();
const signInBox = await page.isVisible('Sign InRegister')
expect(signInBox).toBe(false)

});





