/**
 * @name Recover HTML Table Value
 *
 * @desc Retrieves the value of an HTML table and returns it as an object
 *
 */

// Import the puppeteer library
import puppeteer from 'puppeteer';

// Wrap the code in an asynchronous function
(async () => {
    // Launching a new instance of Puppeteer with headless mode set to false
    const browser = await puppeteer.launch({headless: false});

    // Creating a new page in the instance of Puppeteer
    const page = await browser.newPage();

    // Navigating to a specified URL
    await page.goto('https://www.textfixer.com/html/html-table-generator.php');

    // Initializing an empty array to store the results
    let results = [];

    // Using page.evaluate to access the page DOM and retrieve the table data
    let table = await page.evaluate(() => {
        let table = {
            headers: [],
            rows: [],
        }

        // Selecting the table headers and storing them in the headers array
        document.querySelector('#newTable > table > tbody').querySelectorAll('th').forEach((e) => {
            table.headers.push(e.innerText);
        })

        // Selecting the table rows, splitting them by tab characters, and storing them in the rows array
        document.querySelector('#newTable > table > tbody').querySelectorAll('tr').forEach((e, i) => {
            // Skipping the first row (headers)
            if (i === 0) {
                return;
            }

            table.rows.push(e.innerText.split('\t'));
        })

        return table;
    });

    // Looping through the headers and rows to create a final results array
    for (let i = 0; i < table.headers.length; i++) {
        for (let j = 0; j < table.rows.length; j++) {
            results.push({
                header: table.headers[i],
                row: table.rows[j][i],
            })
        }
    }

    // Logging the final results array
    console.log(results);

    // Close the browser instance.
    // await browser.close()
})();
