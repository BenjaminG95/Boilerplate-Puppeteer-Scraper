/**
 * @name screenshots
 *
 * @desc Do a screenshot and saves it as a .png file
 *
 */

// Import the puppeteer library
import puppeteer from "puppeteer";

// Wrap the code in an asynchronous function
(async () => {
    // Launch a new instance of the browser with headless mode disabled
    const browser = await puppeteer.launch({headless: false});

    // Create a new page in the browser
    const page = await browser.newPage();

    // Set the viewport size of the page to 1280x800 pixels
    await page.setViewport({ width: 1280, height: 800 });

    // Navigate to the Google homepage
    await page.goto('https://www.google.com/');

    // Take a screenshot of the entire page and save it as "google.png"
    await page.screenshot({ path: 'google.png', fullPage: true });

    // if you are inside a task using puppeteer scraper Actor on Apify :
    /**
     *  const screenshot = await page.screenshot();
     *  await context.Apify.setValue('my-key', screenshot, { contentType: 'image/png' });
     */

    // Close the browser instance
    // await browser.close();
})()
