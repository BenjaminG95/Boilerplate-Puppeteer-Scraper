/**
 * @name Get Title
 *
 * @desc Scrapes the title of a webpage using Puppeteer and logs it to the console.
 *
 */

// Import the puppeteer library
import puppeteer from 'puppeteer';

// Wrap the code in an asynchronous function
(async () => {
    // Launch a new instance of a headless browser.
    const browser = await puppeteer.launch({headless: false});

    // Create a new page within the browser instance.
    const page = await browser.newPage();

    // Navigate to a specified URL.
    await page.goto('https://www.google.com/');

    // Retrieve the page title.
    const title = await page.title();

    // Log the page title to the console.
    console.log(title);

    // Close the browser instance.
    //await browser.close()
})();
