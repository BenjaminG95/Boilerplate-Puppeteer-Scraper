/**
 * @name logInsidePageEvaluate
 *
 * @desc when we want to make a console.log inside a page.evaluate, the log is made in the console of the script navigator.
 *       Here is the solution to display it in your IDE console
 */

// Import the Puppeteer library
import puppeteer from 'puppeteer';

// Define an async function
(async () => {

    // Launch a new instance of a browser
    const browser = await puppeteer.launch({
        headless: false, // Set headless mode to false to display the browser window
    });

    // Create a new page in the browser
    const page = await browser.newPage();

    // Navigate to the Google website
    await page.goto('https://google.com');

    // Listen for console events on the page and log them to the console of the IDE
    await page.on('console', msg => console.log(msg.text()));

    // Execute a function on the page
    await page.evaluate(() => {
        // Find an element on the page and get its text content
        let loggedMessage = document.querySelector('.gb_g').textContent;

        // Log the element's text content to the console of the IDE
        console.log(loggedMessage);

        // if you need to log an object or array, you have to use JSON.stringify:
        loggedMessage = {toto: 'tata', tata: 'toto'}
        // Log the element's text content to the console of the IDE
        console.log(JSON.stringify(loggedMessage));

        loggedMessage = ['toto', 'tata'];
        console.log(JSON.stringify(loggedMessage));

    })

    // Close the browser instance
    // await browser.close();
})();
