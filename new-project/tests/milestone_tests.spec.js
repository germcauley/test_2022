// @ts-check
const { test, expect } = require('@playwright/test');
const {BasePage} = require('../../pages/basePage.js');
const {ProjectPage} = require('../../pages/projectPage');
const uaParser = require('ua-parser-js');
test.describe.configure({ mode: 'parallel' });

let userAgentInfo,browserName,index;


//assertion data
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

test.afterEach(async ({ page }) => {
    //cleanup
    const projectPage = new ProjectPage(page);
   await projectPage.cleanup_deleteMileStones();
});



test('Create a Milestone', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //open active project , create a task list    
    await projectPage.openActiveProject1();

    await projectPage.viewMileStones();

    await projectPage.createMileStone(browserName+"MileStone"+index);

    var res = projectPage.page.locator(mileStoneTitle);
    await expect(res).toHaveText([
                    browserName+"MileStone"+index
                ]);
    //open milestone for cleanup
    await projectPage.openMileStone(browserName+"MileStone"+index)   
});

test('Create a Milestone and then complete the milestone', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //open active project , create a task list    
    await projectPage.openActiveProject1();

    await projectPage.viewMileStones();

    await projectPage.createMileStone(browserName+"MileStone"+index);

    var res = projectPage.page.locator(mileStoneTitle);
    await expect(res).toHaveText([
        browserName+"MileStone"+index
                ]);
    await projectPage.openMileStone(browserName+"MileStone"+index) 
    await projectPage.completeMileStone();  
    
    //cleanup

   
});