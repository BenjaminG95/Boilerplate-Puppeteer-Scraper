/**
 * @name clickAndGetValue
 *
 * @desc Clicks on an element and retrieves its value
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

    // Go to a website
    await page.goto('https://www.infowebmaster.fr/outils/generateur-nombre-aleatoire.php');

    // Click on an element
    await page.click('#content > form > fieldset > div.centrer > input[type=button]');

    // Retrieve the value of an element and store it in a variable
    let result = await page.evaluate(() => document.querySelector('#result').innerText);
    // Log the value to the console
    console.log(result)

    // Close the browser instance.
    // await browser.close();
})()
