const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});