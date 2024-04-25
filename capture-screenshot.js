// script taken and modified from https://www.bannerbear.com/blog/how-to-take-screenshots-with-puppeteer/

const puppeteer = require('puppeteer');

(async () => {
    const website_url = process.argv[2];
    const filename = new URL(website_url).hostname;
    const now_string = new Date().toISOString();
    const savePath = 'output/' + filename + '_' + now_string + '.png';

    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Open URL in current page
    await page.goto(website_url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Capture screenshot
    await page.screenshot({
        path: savePath,
        fullPage: true,
    });

    // Close the browser instance
    await browser.close();
})();
