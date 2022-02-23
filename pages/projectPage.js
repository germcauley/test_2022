const { BasePage } = require('./basePage');

//locators
const taskListoptionsBtn = '.m--small'; 
const deleteListBtn = '.w-options-list > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)';
const deleteConfirmationBtn = 'button.ml--auto';
const taskListDeletedPopup = '.w-toaster'
const deleteMileStoneBtn = '.w-milestone-row__actions > li:nth-child(2)';
const deleteMileStonePopupMsg = '#project > div.Root > div > div.padding-left-content > div > div > div:nth-child(9) > div';



exports.ProjectPage = class ProjectPage extends BasePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super();
        this.page = page;

    }

    //methods    
    async selectListView() {
        
            // Click button:has-text("List")
        await this.page.locator('button:has-text("List")').click();
        // Click span[role="option"]:has-text("List")
        await this.page.locator('span[role="option"]:has-text("List")').click();
    }

    async openActiveProject() {       
                
            // Click a:has-text("GeraldMcAuley")
        await Promise.all([
            this.page.waitForNavigation(/*{ url: 'https://automationtesting.teamwork.com/#/projects/682/tasks/table' }*/),
            this.page.locator('a:has-text("GeraldMcAuley")').click()
        ]);
    }

    async addTaskList() {
            // Click button:has-text("Add Task List")
        await this.page.locator('button:has-text("Add Task List")').click();
        // Click [placeholder="e\.g\.\ Customer\ requests"]
        await this.page.locator('#addOrEditTaskList_name').click();
        // Fill [placeholder="e\.g\.\ Customer\ requests"]
        await this.page.locator('#addOrEditTaskList_name').fill('My New Task List');
        // Click #undefined_1 >> text=Add Task List
        await this.page.locator('#undefined_1 >> text=Add Task List').click();
        
        
    }
    async createTask(taskname){
        // Click text=This is a task list No Tasks No tasks have been found. Click the button below to >> button >> nth=0
        await this.page.locator('#mainContent >> text=My New Task List').click();        
        // Click text=This is a task list (#2) >> button
        await this.page.locator('text=My New Task List >> button').click();
         // Click [placeholder="Add\ a\ task"]
        await this.page.locator('[placeholder="Add\\ a\\ task"]').click();
        // Fill [placeholder="Add\ a\ task"]
        await this.page.locator('[placeholder="Add\\ a\\ task"]').fill(taskname);
        // Press Enter
        await this.page.locator('[placeholder="Add\\ a\\ task"]').press('Enter');
    } 

     async completeTask(){
        // Click text=Task to be completed Edit Details >> button
        await this.page.locator('text=Task to be completed Edit Details >> button').click();
        await this.page.locator('text=Task to be completed Edit Details >> button').click();
        // Click text=Incomplete Tasks Incomplete Tasks Completed Tasks All Tasks No results found Lis >> div >> nth=1
        await this.page.locator('text=Incomplete Tasks Incomplete Tasks Completed Tasks All Tasks No results found Lis >> div').nth(1).click();
        // Click text=Completed Tasks
        await this.page.locator('text=Completed Tasks').click();
        
        
     }


     async viewMileStones(){
        // Click text=Milestones
        await this.page.locator('text=Milestones').click();
        // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/projects/682/milestones/all');
     }

     async createMileStone(mileStoneName){
                 
            // Click text=Add Milestone
        await this.page.locator('text=Add Milestone').click();
        // Click [placeholder="Give\ this\ milestone\ a\ name"]
        await this.page.locator('#milestoneName').click();
        // Fill [placeholder="Give\ this\ milestone\ a\ name"]
        await this.page.locator('#milestoneName').fill(mileStoneName);
        // Click .CodeMirror-scroll
    // await page.locator('.CodeMirror-scroll').click();
        // Click form[name="addMilestoneForm"] >> text=Add Milestone
        await this.page.locator('form[name="addMilestoneForm"] >> text=Add Milestone').click();  
     }

     
     async completeMileStone(mileStoneName){         
            // Click text=Complete this Milestone
        await this.page.locator('text='+mileStoneName).hover();
        await this.page.locator('text='+mileStoneName).click();
        // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/milestones/236');
        // Click button[name="milestonecomplete"]
        //await this.page.waitForLoadState('load');
        await this.page.locator('button[name="milestonecomplete"]').click();
        //await this.page.locator('button[name="milestonecomplete"]')
        // Click a:has-text("Milestones")
        await this.page.locator('a:has-text("Milestones")').click();
        await this.page.locator('a:has-text("Milestones")').click();
        // assert.equal(page.url(), 'https://automationtesting.teamwork.com/#/projects/682/milestones/all');

        // Click text=Completed 1
        await this.page.locator('text=Completed 1').hover();
        await this.page.locator('text=Completed 1').click();
     }
    //cleanUp Methods
     async cleanup_deleteTaskLists(tasklistname){
        try{         
            
            
            await this.page.locator(taskListoptionsBtn).hover();
            await this.page.locator(taskListoptionsBtn).click();
            await this.page.locator(deleteListBtn).isVisible
            await this.page.locator(deleteListBtn).click();
            await this.page.locator(deleteConfirmationBtn).isVisible();
            await this.page.locator(deleteConfirmationBtn).click();
            await this.page.locator(deleteConfirmationBtn).isHidden();
            await this.page.locator(taskListDeletedPopup).isVisible();

        }  
        catch(e){
            console.log("Cleanup error "+e);

        }      
        finally{
            console.log("Cleanup finished");
        }       
     }


     async cleanup_deleteMileStones(){
         try{
            //await this.page.locator(mileStoneOptionsMenu).hover();
            await this.page.locator(deleteMileStoneBtn).isVisible();
            await this.page.locator(deleteMileStoneBtn).hover();
            await this.page.locator(deleteMileStoneBtn).click();
            await this.page.locator(deleteConfirmationBtn).isVisible();
            await this.page.locator(deleteConfirmationBtn).click();
            await this.page.locator(deleteMileStonePopupMsg).isVisible();
         }
         catch(e){
            console.log("Cleanup error "+e);
         }
         finally{
            console.log("Cleanup finished");
         }        
     }
}
