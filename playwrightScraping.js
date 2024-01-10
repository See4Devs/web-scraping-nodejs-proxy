const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    proxy: {
      server: "http://localhost:8080",
    },
  });
  const page = await browser.newPage();
  await page.goto("http://toscrape.com/");

  // Extract and log the entire HTML content
  const content = await page.content();
  console.log(content);

  await browser.close();
})();
