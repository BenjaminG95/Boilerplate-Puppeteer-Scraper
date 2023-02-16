/**
 * @name request logInsidePageEvaluate
 *
 * @desc when we want to make a console.log inside a page.evaluate, the log is made in the console of the script navigator.
 *       Here is the solution to display it in your IDE console
 */

import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();

    await page.goto('https://google.com');

    await page.on('console', msg => console.log(msg.text()));

    await page.evaluate(() => {
        let loggedMessage = 'toto';
        console.log(loggedMessage);
    })
})();
