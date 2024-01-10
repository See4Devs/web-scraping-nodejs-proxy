const fetch = require("node-fetch");
const HttpProxyAgent = require("http-proxy-agent");

async function fetchData(url) {
  try {
    const proxyAgent = new HttpProxyAgent.HttpProxyAgent(
      "http://localhost:8080"
    );
    const response = await fetch(url, { agent: proxyAgent });
    const data = await response.text();
    console.log(data); // Outputs the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("http://toscrape.com/");
