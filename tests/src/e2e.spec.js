import { test, expect } from '@playwright/test';

//variables representing user input
const nameInput = 'test name';
const emailInput = 'test@test.com';
const githubInput = 'testGithub';

test('add student modal populates from button', async ({ page }) => {
    // will need to preface with the authentication modal
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Email Address').click();
await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
await page.getByPlaceholder('Email Address').press('Tab');
await page.getByPlaceholder('Password').fill('password');
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
await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
await page.getByPlaceholder('Email Address').press('Tab');
await page.getByPlaceholder('Password').fill('password');
await page.getByRole('button', { name: 'Sign In' }).click();
const signInBox = await page.isVisible('Sign InRegister')
expect(signInBox).toBe(false)

});



test('sign out', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('ortiz123@example.ocm');
  await page.getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').press('Shift+Tab');
  await page.getByPlaceholder('Email Address').press('ArrowRight');
  await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
  await page.getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  const signInPage= await page.isVisible('#login-root')
  expect(signInPage).toBe(true)
});



test('invalid sign in attempt', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('afdskjjjsafd');
  await page.getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').fill('adsfafdsaf');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const invalidlogin = await page.isVisible('.error-text')
  expect(invalidlogin).toBe(true)
});

test('student is able to be added to cohort table', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  //sign in
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
  await page.getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
// 

//create variables here that will represent user input, will be compared to the text in the table
const nameInput = 'gandalf the grey';
const emailInput = 'gandalf@mordor.com';
const githubInput = 'gandalf123'

  await page.getByRole('button', { name: 'Add Student' }).click();
  await page.getByPlaceholder('name...').click();
  await page.getByPlaceholder('name...').fill(nameInput);
  await page.getByPlaceholder('name...').press('Tab');
  await page.getByPlaceholder('email...').fill(emailInput);
  await page.getByPlaceholder('email...').press('Tab');
  await page.getByPlaceholder('github...').fill(githubInput);
  await page.locator('div').filter({ hasText: /^Add StudentCancel$/ }).getByRole('button', { name: 'Add Student' }).click();
  const nameCell = await page.$('.name-cell').innerText();
  const emailCell = await page.$('.email-cell').innerText();
  const githubCell = await page.$('.github-cell').innerText();
  await page.getByRole('cell', { name: 'gandalf the grey' }).click();
  await page.getByRole('cell', { name: 'gandalf@mordor.com' }).click();
  await page.getByRole('cell', { name: 'gandalf123' }).click();
  
  expect(nameText).toBe(nameInput);
  expect(emailText).toBe(emailInput);
  expect(githubText).toBe(githubInput);

});

