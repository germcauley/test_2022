// @ts-check
const { test, expect } = require('@playwright/test');
const {BasePage} = require('../../pages/basePage.js');
const {ProjectPage} = require('../../pages/projectPage');
const uaParser = require('ua-parser-js');
test.describe.configure({ mode: 'serial' });

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
  //await projectPage.cleanup_deleteMileStones();
});



test('Create a Milestone', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //open active project , create a task list    
    await projectPage.openActiveProject();

    await projectPage.viewMileStones();

    await projectPage.createMileStone('This is a milestone');

    //cleanup  
    
});

test('Create a milestone and then complete the milestone', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //open active project , create a task list    
    await projectPage.openActiveProject();

    await projectPage.viewMileStones();

    await projectPage.createMileStone('Complete this Milestone');
    
    await projectPage.completeMileStone('Complete this Milestone');  
    
    await expect(page.locator('text=Complete this Milestone')).toBeVisible(); 
    //cleanup

    
   
});



test('cleanup milestones', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //open active project , create a task list    
    await projectPage.openActiveProject();

    await projectPage.viewMileStones();

    // Click text=All 2
    await page.locator('text=All 2').click();
  
    // Click text=milestone 2
    await page.locator('text=This is a milestone').click();
    await page.locator('.s-milestone-details').isVisible;  
    await page.locator('.s-milestone-details').isEditable(); 
    // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/milestones/255');
    // Click text=Delete    
    await page.locator('span:has-text("Delete")').click();
    // Click button:has-text("OK")
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://automationtesting.teamwork.com/#/projects/682/milestones/upcoming' }*/),
      page.locator('button:has-text("OK")').click()
    ]);
   
    // Click text=All 1
    await page.locator('text=All 1').click();
    // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/projects/682/milestones/all');
  
    // Click text=Complete this Milestone
    await page.locator('text=Complete this Milestone').click();
    await page.locator('.s-milestone-details').isVisible; 
    await page.locator('.s-milestone-details').isEditable() ;
    // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/milestones/254');
    // Click text=Delete    
    await page.locator('span:has-text("Delete")').click();
    // Click button:has-text("OK")
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://automationtesting.teamwork.com/#/projects/682/milestones/upcoming' }*/),
      page.locator('button:has-text("OK")').click()
    ]);
  
  });
