import { test, expect, firefox, chromium, webkit } from "@playwright/test";

const API_URL = process.env.API_URL || "http://localhost:8000";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const browsers = process.env.BROWSER.split(",");

//------------------Sign In------------------

for (const browserName of browsers) {
  test(`Sign In - ${browserName}`, async () => {
    test.setTimeout(60000);
    let browser;
    if (browserName === 'chromium') {
      browser = await chromium.launch();
    } else if (browserName === 'firefox') {
      browser = await firefox.launch();
    } else if (browserName === 'webkit') {
      browser = await webkit.launch();
    } else {
      throw new Error(`Unsupported browser: ${browserName}`);
    }
    const page = await browser.newPage();
    await page.goto(CLIENT_URL);
    await page.fill('[placeholder="Email Address"]', "test@test.com");
    await page.fill('[placeholder="Password"]', "test");
    await page.click('button[class="login-button"]');
    await page.waitForSelector("button", { name: "Sign Out" });
    const signedIn = await page.isVisible("button", { name: "Sign Out" });
    expect(signedIn).toBe(true);
    await browser.close();
  });

  //------------------Register------------------

  test(`Register - ${browserName}`, async () => {
    test.setTimeout(60000);
    await fetch(`${API_URL}/users/test2`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let browser;
    if (browserName === "chromium") {
      browser = await chromium.launch();
    } else if (browserName === "firefox") {
      browser = await firefox.launch();
    } else if (browserName === "webkit") {
      browser = await webkit.launch();
    } else {
      throw new Error(`Unsupported browser: ${browserName}`);
    }
    const page = await browser.newPage();
    await page.goto(CLIENT_URL);
    await page.getByRole("button", { name: "Register" }).click();
    await page.fill('[placeholder="First and Last Name"]', "test2");
    await page.fill('[placeholder="Email address"]', "test2@test.com");
    await page.fill('[placeholder="Set Password"]', "test");
    await page.fill('[placeholder="Verify Password"]', "test");
    const pageVisible = await page.isVisible('[placeholder="Verify Password"]')
    await page.getByRole("button", { name: "Register" }).click();
    await page.waitForSelector("button", { name: "Sign In" });
    const didRegister = await page.isVisible("button", { name: "Sign In" });
    expect(pageVisible).toBe(true);
    expect(didRegister).toBe(true);
    await browser.close();
  });

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

  test(`Invalid Sign In Attempt - ${browserName}`, async () => {
    test.setTimeout(60000);
    let browser;
    if (browserName === "chromium") {
      browser = await chromium.launch();
    } else if (browserName === "firefox") {
      browser = await firefox.launch();
    } else if (browserName === "webkit") {
      browser = await webkit.launch();
    } else {
      throw new Error(`Unsupported browser: ${browserName}`);
    }
    const page = await browser.newPage();
    await page.goto(CLIENT_URL);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForSelector('.error-text');
    const invalidlogin = await page.isVisible('.error-text')
    expect(invalidlogin).toBe(true)
    await browser.close();
  });

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
}
