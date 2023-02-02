/**
 * @name set cookie
 *
 * @desc Sets the "login_email" property in a PayPal cookie and autofill the field
 *
 */

// Define an object that represents the cookie to be set
const cookie = {
    name: 'login_email',      // The name of the cookie property
    value: 'emailSetByCookie@domain.com',    // The value to be set for the property
    domain: '.paypal.com',    // The domain for which the cookie will be set
    url: 'https://www.paypal.com/',   // The URL for which the cookie will be set
    path: '/',                // The path for which the cookie will be set
    httpOnly: true,           // Set to true to prevent access to the cookie from JavaScript
    secure: true              // Set to true to only send the cookie over a secure connection
};

// Import the puppeteer library
import puppeteer from "puppeteer";

// Wrap the code in an asynchronous function
(async () => {
    // Launch a new instance of the browser with headless mode disabled
    const browser = await puppeteer.launch({headless: false});

    // Create a new page in the browser
    const page = await browser.newPage();

    // Set the specified cookie in the page
    await page.setCookie(cookie);

    // Navigate to the sign-in page of PayPal
    await page.goto('https://www.paypal.com/signin');

    // Close the browser instance
    // await browser.close();
})()
