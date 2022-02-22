// @ts-check
const { test, expect } = require('@playwright/test');
const {BasePage} = require('../../pages/basePage.js');
const {ProjectPage} = require('../../pages/projectPage');
const uaParser = require('ua-parser-js');
test.describe.configure({ mode: 'parallel' });

let userAgentInfo,browserName,index;


//assertion data
const newTaskNameInlist = 'div.TasksTableTaskList__task:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a:nth-child(1)';
const completedTaskNameInlist = '.table-cell-task-name';
const mileStoneTitle = '.w-milestone-row__title-label';




test.beforeEach(async ({ page },workerInfo) => {
    await page.goto('https://automationtesting.teamwork.com');
    const getUA = await page.evaluate(() => navigator.userAgent);
    userAgentInfo = uaParser(getUA);
    browserName = userAgentInfo.browser.name;
    index = workerInfo.workerIndex

    console.log('browser name:', browserName);
    console.log("Worker index is:", workerInfo.workerIndex)
});




test('Login and verify ID', async ({ page }) => {
    const basePage = new BasePage(page);
    //login
    await basePage.LoginMethodpom();     
    //click avatar
    await page.locator('button.flex-grow').click();
    //wait for menu to be visible
    await page.locator('span.text-text:nth-child(1)').isVisible();
    //verify name
    await expect(page.locator('span.text-text:nth-child(1)')).toHaveText([
        'Gerald McAuley'
    ]);
    await page.screenshot({ path: 'ScreenShots/LoginSuccessScreenshot.png', fullPage: true });
});






