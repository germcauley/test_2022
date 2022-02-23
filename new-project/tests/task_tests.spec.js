// @ts-check
const { test, expect } = require('@playwright/test');
const {BasePage} = require('../../pages/basePage.js');
const {ProjectPage} = require('../../pages/projectPage');
const uaParser = require('ua-parser-js');


test.describe.configure({ mode: 'serial' });

let userAgentInfo,browserName,index;


//assertion data
const newTaskNameInlist = 'div.TasksTableTaskList__task:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a:nth-child(1)';
const completedTaskNameInlist = '.table-cell-task-name';



test.beforeEach(async ({ page },workerInfo) => {  
    await page.goto('https://automationtesting.teamwork.com');
    const getUA = await page.evaluate(() => navigator.userAgent);
    userAgentInfo = uaParser(getUA);
    browserName = userAgentInfo.browser.name;
    index = workerInfo.workerIndex

    console.log('browser name:', browserName);
    //console.log("Worker index is:", workerInfo.workerIndex)
});

// test.afterEach(async ({}) => {
    
//     await projectPage.cleanup_deleteTaskLists();
// });



test('Create tasklist', async ({page}) => {
    const projectPage = new ProjectPage(page)
    
    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //go to list view
    await projectPage.selectListView();
    //open active project , create a task list    
    await projectPage.openActiveProject(); 
    await projectPage.addTaskList();
    await projectPage.createTask('A new Task');      
});


test('Create task and update status', async ({page}) => {
    const projectPage = new ProjectPage(page)
    //login    
    await projectPage.LoginMethodpom(); 
    //go to projects tab
    await projectPage.selectProjectsTab();
    await projectPage.openActiveProject(); 
    //await projectPage.addTaskList();
    await projectPage.createTask('Task to be completed');   
    //complete task
    await projectPage.completeTask();
    // verify completion
    await expect(page.locator('text=Task to be completed')).toBeVisible();
});

test('Cleanup Tasks', async ({page}) => {
    const projectPage = new ProjectPage(page)
    //login    
    await projectPage.LoginMethodpom(); 
    //go to projects tab
    await projectPage.selectProjectsTab();
    await projectPage.openActiveProject(); 
    
            // Click a[role="button"]
    await page.locator('a[role="button"]').click();
    // Click a:has-text("Delete List")
    await page.locator('a:has-text("Delete List")').click();
    // Click button:has-text("OK")
    await page.locator('button:has-text("OK")').click();
});


