const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Navigate to the specified website
    const url = process.argv[2];
    await page.goto(url);

    // await page.waitForNavigation({
    //     waitUntil: 'load',
    // });

    // Set the PDF options with desired width and height
    const pdfOptions = {
        path: 'output/' + Date.now() + '.pdf', // Path to save the PDF file
        pageRanges: '1',
        width: '45.5cm', // Desired width
        height: '28.6cm', // Desired height
        printBackground: true, // Print background colors
        timeout: 0,
    };

    // Generate the PDF
    await page.pdf(pdfOptions);

    // Close the browser
    await browser.close();
})();
