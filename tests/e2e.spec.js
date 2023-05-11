import { test, expect } from '@playwright/test';

test('end to end uses tab button to move thru fill blocks', async ({ page }) => {
    // will need to preface with the authentication modal
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.locator('#navbar').getByRole('button', { name: 'Select Cohort Dropdown' }).click();
  await page.getByRole('button', { name: 'Assessments' }).click();
  await page.getByRole('button', { name: 'Create New Cohort' }).click();
  await page.getByRole('button', { name: 'Add Student' }).click();
  const seeStudentModal = await page.isVisible('.student-modal-form;')
    if(!seeStudentModal){
            throw new Error('Add student modal did not appear')
        }
// should be able to hit cancel button at any time that the user wants to drop the window, regadless of what info they have filled out
// user should be able to 
const nameInput = 'test name';
const emailInput = 'test@test.com';
const githubInput = 'testGithub';
  await page.getByPlaceholder('name...').click();
  const nameValue = await page.getByPlaceholder('name...').fill(nameInput);
  await page.getByPlaceholder('name...').press('Tab');
  // make sure tab moves to the next column
 const emailValue = await page.getByPlaceholder('email...').fill(emailInput);
  await page.getByPlaceholder('email...').press('Tab');
  // make sure tab moves to the next column
 const githubValue =  await page.getByPlaceholder('github...').fill(githubInput);
        if (nameValue && emailValue && githubValue){
        }
 // expect 
});






test('end to end clicks thru fill blocks', async ({ page }) => {
    // will need to preface with the authentication modal
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.locator('#navbar').getByRole('button', { name: 'Select Cohort Dropdown' }).click();
  await page.getByRole('button', { name: 'Assessments' }).click();
  await page.getByRole('button', { name: 'Create New Cohort' }).click();
  await page.getByRole('button', { name: 'Add Student' }).click();
  const seeStudentModal = await page.isVisible('.student-modal-form;')
    if(!seeStudentModal){
            throw new Error('Add student modal did not appear')
        }
// should be able to hit cancel button at any time that the user wants to drop the window, regadless of what info they have filled out
// user should be able to 
  await page.getByPlaceholder('name...').click();
  await page.getByPlaceholder('name...').fill('billytomasello');
  await page.getByPlaceholder('name...').click();
  await page.getByPlaceholder('email...').fill('billytomasello1@gmail.com');
  await page.getByPlaceholder('email...').click();
  await page.getByPlaceholder('github...').fill('billytomasello');

  await page.locator('div').filter({ hasText: /^Add StudentCancel$/ }).getByRole('button', { name: 'Add Student' }).click();
});