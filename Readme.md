# Using Proxies with NodeJs

This is a sample project on how to use a proxy using NodeJS.

## Prerequisites

Make sure you have a local proxy up and running. You can use the open-source tool [mitmproxy](https://mitmproxy.org/). To get started, head over to the [mitmproxy download page](https://mitmproxy.org/downloads/#10.1.6/), where you can download version 10.1.6 tailored for your operating system.

## Required libraries

Next, you'll need to install some key Node.js packages for handling HTTP requests and parsing HTML.

```
npm install axios playwright puppeteer http-proxy-agent
npx playwright install
```

## Run The scripts

```
node fetchScraping.js
node playwrightScraping.js
node puppeteerScraping.js
node scrapingWithBrightData.js
```

> **Please note:** This code is shared for educational purposes and to demonstrate technical capabilities. Many online platforms prohibit scraping in their terms of service. Using this code to scrape websites may violate these terms of service or even local, national, or international laws. It's imperative that you check and respect the specific terms of service for each site you interact with. Do not use this code for any purposes that violate these terms or any applicable laws. Any use of this code is at your own risk and discretion, and the author cannot be held responsible for any misuse or resulting consequences.
