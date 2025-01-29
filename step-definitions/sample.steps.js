const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { chromium } = require('playwright');

let browser, page;

Given('I open the saucelab website', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/v1/');
});

When('I enter my username and password', async function () {
  await page.fill('#user-name', 'standard_user'); // Enter username
  await page.fill('#password', 'secret_sauce'); // Enter password
});

When('I click the login button', async function () {
    await Promise.all([
        page.waitForNavigation(), // Ensure navigation happens
        page.click('#login-button') // Click the login button
      ]);
});

Then('I should be redirected to the inventory page', async function () {
    const currentUrl = await page.url(); // Get the current page URL
    expect(currentUrl).to.include('/inventory'); // Check if URL contains 'inventory'
    await browser.close(); // Close browser
});
