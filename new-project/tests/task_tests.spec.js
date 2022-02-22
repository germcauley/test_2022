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
    const projectPage = new ProjectPage(page);
    await projectPage.cleanup_deleteTaskLists();
});



test('Create Task', async ({ page }) => {
    const projectPage = new ProjectPage(page);
    
    //login    
    await projectPage.LoginMethodpom();    
    //go to projects tab
    await projectPage.selectProjectsTab();
    //go to list view
    await projectPage.selectListView();
    //open active project , create a task list    
    await projectPage.openActiveProject1(); 
    await projectPage.addTaskList(browserName+"Tasklist"+index);
    await projectPage.createTask("This is a new task for "+ browserName,browserName+"Tasklist"+index);
    var res = projectPage.page.locator(newTaskNameInlist);
    await expect(res).toHaveText([
        "This is a new task for "+ browserName
    ]);   
});


test('Create task and update status', async ({ page }) => {
    const projectPage = new ProjectPage(page)
    
    //login    
    await projectPage.LoginMethodpom(); 
    //go to projects tab
    await projectPage.selectProjectsTab();
    await projectPage.openActiveProject1(); 
    await projectPage.addTaskList(browserName+"Tasklist"+index);
    await projectPage.createTask("This is a new task for "+ browserName,browserName+"Tasklist"+index);
    await projectPage.createAdditionalTasks("This is a completed task",);    
    //complete task
    await projectPage.completeTask();
    //filter tasks
    await projectPage.toggleTaskStatusFilter();
    //verify completion
    await page.locator(completedTaskNameInlist).isEditable();
    var res = projectPage.page.locator(completedTaskNameInlist);
        await expect(res).toHaveText([
            "This is a completed task"
        ]);
});



