const { chromium } = require('playwright-core');

const url = 'https://example.com/';

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium' });
  const page = await browser.newPage();
  await page.goto(url);
  const result = await page.evaluate(() => {
    return document.querySelector('h1').textContent;
  });
  console.log(result);
  await browser.close();
})();
