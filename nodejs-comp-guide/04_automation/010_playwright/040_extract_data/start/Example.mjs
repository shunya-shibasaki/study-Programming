import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const htmlStr = await page.content();

  console.log(htmlStr);

  await browser.close();
})();
