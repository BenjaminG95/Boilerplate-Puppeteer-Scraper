/**
 * @name keyboard
 *
 * @desc recover value of html table and return it as object
 *
 */

import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.textfixer.com/html/html-table-generator.php');
    let results = []

    let table = await page.evaluate(() => {
        let table = {
            headers: [],
            rows: [],
        }

        document.querySelector('#newTable > table > tbody').querySelectorAll('th').forEach((e) => {
            table.headers.push(e.innerText);
        })

        document.querySelector('#newTable > table > tbody').querySelectorAll('tr').forEach((e, i) => {
            if (i === 0) {
                return;
            }

            table.rows.push(e.innerText.split('\t'));
        })

        return table;
    });

    for (let i = 0; i < table.headers.length; i++) {
        for (let j = 0; j < table.rows.length; j++) {
            results.push({
                header: table.headers[i],
                row: table.rows[j][i],
            })
        }
    }

    console.log(results);
})();