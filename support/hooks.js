import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser, page;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});