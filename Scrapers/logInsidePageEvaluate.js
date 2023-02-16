/**
 * @name logInsidePageEvaluate
 *
 * @desc When we want to make a console.log inside a page.evaluate, the log is made in the console of the script navigator.
 *       Here is the solution to display it in your IDE console using page.exposeFunction.
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

    // Expose a function that logs a message to the console of the IDE
    await page.exposeFunction('logger', msg => console.log(msg));

    // Navigate to the Google website
    await page.goto('https://google.com');

    // Execute a function on the page
    await page.evaluate(async () => {
        // Find an element on the page and get its text content
        let loggedMessage = document.querySelector('.gb_p').innerText;

        // Log the element's text content to the console of the IDE
        await window.logger(loggedMessage);

        // Objects and arrays can also be logged
        loggedMessage = { toto: 'toto', tata: 'tata' };
        await window.logger(loggedMessage);

        loggedMessage = ['toto', 'tata'];
        await window.logger(loggedMessage);
    });

    // Close the browser instance
    // await browser.close();
})();
