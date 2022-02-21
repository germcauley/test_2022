// @ts-check
const { test, expect } = require('@playwright/test');
const {BasePage} = require('../../pages/basePage.js');

const {ProjectPage} = require('../../pages/projectPage');



//assertions
const newTaskNameInlist = 'div.TasksTableTaskList__task:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a:nth-child(1)';
const completedTaskNameInlist = '.table-cell-task-name-link';
const mileStoneTitle = '.w-milestone-row__title-label';



test.beforeEach(async ({ page }) => {
    await page.goto('https://automationtesting.teamwork.com');
});

test.afterEach(async ({ page }) => {
    
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
    //await page.screenshot({ path: 'screenshot.png', fullPage: true });
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
    await projectPage.openActiveProject1(); //parameterise here?
    await projectPage.addTaskList();
    await projectPage.createTask("This is a new task");    
    var res = projectPage.page.locator(newTaskNameInlist);
    await expect(res).toHaveText([
        "This is a new task"
    ]); 
    await projectPage.selectProjectsTab();
    await projectPage.cleanup_deleteTaskLists();
        
            //await page.screenshot({ path: 'screenshot.png', fullPage: true });  
});


test('Create task and update status', async ({ page }) => {
    const projectPage = new ProjectPage(page)
    
    //login    
    await projectPage.LoginMethodpom(); 
    //go to projects tab
    await projectPage.selectProjectsTab();
    await projectPage.openActiveProject1(); //parameterise here?
    await projectPage.addTaskList();
    await projectPage.createTask("This is a new task");
    await projectPage.createTask("This is a completed task");
    //complete task
    await projectPage.completeTask();
    //filter tasks
    await projectPage.toggleTaskStatusFilter();
    //verify completion
    var res = projectPage.page.locator(completedTaskNameInlist);
        await expect(res).toHaveText([
            "This is a completed task"
        ]);
    //cleanup
    await projectPage.selectProjectsTab();    
    await projectPage.cleanup_deleteTaskLists()

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

    await projectPage.createMileStone();

    var res = projectPage.page.locator(mileStoneTitle);
    await expect(res).toHaveText([
                    "New Milestone Created"
                ]);
 //cleanup
   //await projectPage.selectProjectsTab();       
  // await projectPage.viewMileStones();
   await projectPage.cleanup_deleteMileStones();
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

    await projectPage.createMileStone();

    var res = projectPage.page.locator(mileStoneTitle);
    await expect(res).toHaveText([
                    "New Milestone Created"
                ]);
    await projectPage.completeMileStone();  
    
    //cleanup
   //await projectPage.selectProjectsTab();       
   //await projectPage.viewMileStones();
   await projectPage.cleanup_deleteMileStones();
});




/**
* @param {import('@playwright/test').Page} page
* @param {string} expected
*/
async function checkNumberOfTodosInLocalStorage(page, expected) {
    return await page.waitForFunction(e => {
        return page.locator('#r1-0 > div:nth-child(1) > h2:nth-child(1)').allInnerTexts()
        // return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
}