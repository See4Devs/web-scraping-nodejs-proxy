const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--proxy-server=http://localhost:8080"],
  });
  const page = await browser.newPage();
  await page.goto("http://toscrape.com/");
  const content = await page.content();
  console.log(content); // Outputs the page HTML
  await browser.close();
})();
