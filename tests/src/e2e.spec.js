import { test, expect } from "@playwright/test";

const API_URL = process.env.API_URL || "http://localhost:8000";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

//------------------Sign In------------------

test("sign in", async ({ page }) => {
  await page.goto(CLIENT_URL);
  await page.fill('[placeholder="Email Address"]', "test@test.com");
  await page.fill('[placeholder="Password"]', "test");
  await page.click('button[class="login-button"]');
  await page.waitForSelector("button", { name: "Sign Out" });
  const signedIn = await page.isVisible("button", { name: "Sign Out" })
  expect(signedIn).toBe(true)
})


//------------------Register------------------

// test('register', async ({ page }) => {
//   await fetch(`${API_URL}/users/test2`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   await page.goto(CLIENT_URL);
//   await page.getByRole('button', { name: 'Register'}).click();
//   await page.fill('[placeholder="First and Last Name"]', 'test2');
//   await page.fill('[placeholder="Email address"]', 'test2@test.com');
//   await page.fill('[placeholder="Set Password"]', 'test');
//   await page.fill('[placeholder="Verify Password"]', 'test');
//   await page.getByRole('button', { name: 'Register'}).click();
//   await page.waitForSelector('text="Account successfully registered!"');
//   const didRegister = await page.isVisible('text="Account successfully registered!"');
//   expect(didRegister).toBe(true);
// })

//------------------Sign Out------------------

// test('sign out', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
//   await page.getByPlaceholder('Email Address').click();
//   await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
//   await page.getByPlaceholder('Email Address').press('Tab');
//   await page.getByPlaceholder('Password').press('Shift+Tab');
//   await page.getByPlaceholder('Email Address').press('ArrowRight');
//   await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
//   await page.getByPlaceholder('Email Address').press('Tab');
//   await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('button', { name: 'Sign out' }).click();
//   const signInPage= await page.isVisible('#login-root')
//   expect(signInPage).toBe(true)
// });

//------------------Invalid Sign In Attempt------------------

// test('invalid sign in attempt', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByPlaceholder('Email Address').click();
//   await page.getByPlaceholder('Email Address').fill('afdskjjjsafd@gmail.com');
//   await page.getByPlaceholder('Email Address').press('Tab');
//   await page.getByPlaceholder('Password').fill('adsfafdsaf');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.waitForSelector('.error-text');
//   const invalidlogin = await page.isVisible('.error-text')
//   expect(invalidlogin).toBe(true)
// });

//------------------Projects Button------------------

// test('projects button', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByPlaceholder('Email Address').click();
//   await page.getByPlaceholder('Email Address').fill('ortiz123@example.com');
//   await page.getByPlaceholder('Email Address').press('Tab');
//   await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('button', { name: 'Projects' }).click();
//   await page.getByText('MCSP-19 · ProjectsSelect a ProjectGroup nameStudentsProjectScoreYoshi\'s AngelsDa').click();
// });

//------------------Home Button------------------

// test("home button goes back to home dashboard", async ({ page }) => {
//   await page.goto("http://localhost:5173/");
//   await page.fill('[placeholder="Email Address"]', "test@test.com");
//   await page.fill('[placeholder="Password"]', "test");
//   await page.getByRole("button", { name: "Sign In" }).click();
//   await page.waitForSelector("#navbar");
//   await page.getByRole("button", { name: "Projects" }).click();
//   await page.waitForSelector('text="MCSP-19 · Projects"');
//   const projects = await page.isVisible('text="MCSP-19 · Projects"');
//   await page.getByRole("button", { name: "Dashboard" }).click();
//   await page.waitForSelector('text="MCSP-19 · Students"');
//   const dashboard = await page.isVisible('text="MCSP-19 · Students"');
//   expect(projects).toBe(true);
//   expect(dashboard).toBe(true);
// });
