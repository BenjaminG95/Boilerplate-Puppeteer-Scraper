/**
 * @name request interception
 *
 * @desc Uses Puppeteer request interception.
 */

import puppeteer from "puppeteer";

(async () => {
    // Launches a new instance of puppeteer in non-headless mode
    const browser = await puppeteer.launch({headless: false});
    // Creates a new page in the opened browser
    const page = await browser.newPage();
    // Enables request interception for the page
    await page.setRequestInterception(true);

    // Adds a listener to the 'request' event of the page, which is triggered
    // whenever a network request is made by the page
    page.on('request', async (request) => {
        // If the resource type of the request is 'image'
        if (request.resourceType() === 'image') {
            console.log('it is an image');
            // Otherwise, if it's not an image resource
        } else {
            // The request is continued, allowing it to be sent
            await request.continue();
            console.log('it is not an image');
        }
    });
    // Sets the viewport of the page to a width of 1280 and height of 800
    await page.setViewport({ width: 1280, height: 800 });
    // Navigates the page to the specified URL
    await page.goto('https://www.google.com/');
    // Closes the browser
    await browser.close();
})();

