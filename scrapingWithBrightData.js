const axios = require("axios");

async function fetchDataWithBrightData(url) {
  const proxyOptions = {
    proxy: {
      host: "YOUR_BRIGHTDATA_PROXY_HOST",
      port: YOUR_BRIGHTDATA_PROXY_PORT,
      auth: {
        username: "YOUR_BRIGHTDATA_USERNAME",
        password: "YOUR_BRIGHTDATA_PASSWORD",
      },
    },
  };
  try {
    const response = await axios.get(url, proxyOptions);
    console.log(response.data); // Outputs the fetched data
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataWithBrightData("http://toscrape.com/");
