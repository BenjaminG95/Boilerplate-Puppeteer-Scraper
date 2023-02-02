/**
 * @name click
 *
 * @desc You can click on most things using the .click() handlers, but in some situations it can be convenient to instruct the mouse directly.
 * mouse can be convenient.
 *
 */

// Import the puppeteer library
import puppeteer from 'puppeteer';

// Wrap the code in an asynchronous function
(async () => {
    // Launch a browser in non-headless mode
    const browser = await puppeteer.launch({headless: false});

    // Open a new page
    const page = await browser.newPage();

    // set the viewport then we know the dimensions of the screen
    await page.setViewport({width: 800, height: 600});

    // go to a page setup for mouse event tracking
    await page.goto('https://clicktestcps.fr/');

    // click an area
    await page.mouse.click(150, 317, {button: 'left'});

    // Close the browser instance.
    // await browser.close()
})();