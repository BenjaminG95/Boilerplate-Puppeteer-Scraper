/**
 * @name hover
 *
 * @desc The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element.
 *
 */

import puppeteer from 'puppeteer';

(async () => {
    // Launch a new browser instance with a graphical interface (headless: false)
    const browser = await puppeteer.launch({headless: false});

    // Create a new page
    const page = await browser.newPage();

    // Navigate to the specified URL
    await page.goto('https://dev.to/_faridjunior/simulate-single-page-app-using-target-selector-3276');

    // Simulate a hover over the selected element with the class ".crayons-subtitle-1"
    await page.hover('.crayons-subtitle-1');

    // Close the browser instance
    // await browser.close();
})()
