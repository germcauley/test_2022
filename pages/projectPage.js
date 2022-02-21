const { BasePage } = require('./basePage');

//locators
const homeHeader = '.PageHomeWorkTable__heading';
const viewBtn = 'div.generic-picker:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)';
const listViewBtn = 'li.results-list--item:nth-child(1) > span:nth-child(1)';
const projectBtn = '.text > div:nth-child(1)';
const addTaskListBtn = '.mr';
const addTaskListNameInput = '#addOrEditTaskList_name';
const addTaskListConfirmBn = 'button.btn:nth-child(2)';
const createTaskBtn = '.TasksTableTaskLists__add-task';
const newlyCreatedTaskElement =''
const newTaskNameInput = '.table-cell-task__form-container > input:nth-child(2)';
const newTaskNameInlist = '.LoaderState > div:nth-child(1) > div:nth-child(1)';
const taskListParent = '.LoaderState > div:nth-child(1) > div:nth-child(1)';
const taskListoptionsBtn = '.TasksTableTaskLists__edit-options';
const deleteListBtn = '.w-options-list > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)';
const deleteConfirmationBtn = 'button.ml--auto';
const taskCompleteToggle = 'div.TasksTableTaskList__task:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > button:nth-child(1)';
const emptyTaskListHeader = '.task-table-blank-title'
const taskIsCompletedBTN = 'button.is-completed';
const taskStatusFilter = '.multiselect';
const completedTasksFilter = 'li.multiselect__element:nth-child(2)';
const completedTaskName = '.table-cell-task-name';
const mileStoneTab = '.milestones-tab > a:nth-child(1)';
const addMileStoneBtn = 'button.main-header__button:nth-child(1)';
const mileStoneNameInput = '#milestoneName';

const addMileStoneConfirmBtn = '.w-loader';
const mileStoneCompleteBtn = '.w-completion-check';
const mileStoneCompleteCheckBtn = '[name="milestonecomplete"]';
const mileStoneOptionsMenu = '.w-milestone-row';
const deleteMileStoneBtn = 'li.h-show-hover--child:nth-child(2)';
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
        
        await this.page.locator(viewBtn).isEnabled();
        await this.page.locator(viewBtn).click();
        await this.page.locator(listViewBtn).click();
    }

    async openActiveProject1() {       
                
        await this.page.locator(projectBtn).isVisible();
        await this.page.locator(projectBtn).click();
    }

    async addTaskList() {
        await this.page.locator(addTaskListBtn).click();
        await this.page.locator(addTaskListNameInput).click();
        await this.page.locator(addTaskListNameInput).press('Backspace');
        await this.page.locator(addTaskListNameInput).type('MyNewTaskList',{delay:200});       
        await this.page.locator(addTaskListConfirmBn).click();
       
        
    }
    async createTask(string){
        
        await this.page.locator(createTaskBtn).isVisible();
        await this.page.locator(createTaskBtn).click();        
        await this.page.locator(newTaskNameInput).type(string);        
        await this.page.locator(newTaskNameInput).press('Enter');          
        //verify created
        await this.page.locator('text='+string).isEditable();
    }

   

    async getTaskinTaskList(){
        
        return await this.page.locator(newTaskNameInlist);
     }    


   

     async completeTask(){
        await this.page.waitForLoadState('load');
        await this.page.locator(taskCompleteToggle).isEditable();
        await this.page.locator(taskCompleteToggle).hover();
        await this.page.locator(taskCompleteToggle).click();
        await this.page.locator(taskCompleteToggle).click();
        await this.page.locator(taskIsCompletedBTN).waitFor();
        //await this.page.locator(taskIsCompletedBTN).isEnabled();
        
     }

     async toggleTaskStatusFilter(){        
        await this.page.locator(taskStatusFilter).click();   
        await this.page.locator(completedTasksFilter).isVisible();
        await this.page.locator(completedTasksFilter).click();                
     }

     async viewMileStones(){
        await this.page.locator(mileStoneTab).isEditable()
        await this.page.locator(mileStoneTab).click() 
     }

     async createMileStone(){
                 
         await this.page.locator(addMileStoneBtn).isVisible();
         await this.page.locator(addMileStoneBtn).click();
         //create method for fields
         await this.page.locator(mileStoneNameInput).click()
         await this.page.locator(mileStoneNameInput).press('Backspace')
         await this.page.locator(mileStoneNameInput).type('New Milestone Created',{delay:200});         
         await this.page.locator(addMileStoneConfirmBtn).isEditable()
         await this.page.locator(addMileStoneConfirmBtn).click();
     }

     async completeMileStone(){
        await this.page.locator(mileStoneCompleteBtn).isEditable();
        await this.page.locator(mileStoneCompleteBtn).click();
        //wait for green checkmark
        await this.page.locator(mileStoneCompleteCheckBtn).isEditable();
     }
    //cleanUp Methods
     async cleanup_deleteTaskLists(){
        try{         
            
            await this.page.locator(projectBtn).isVisible();
            await this.page.locator(projectBtn).click();
            await this.page.locator(taskListoptionsBtn ).click();
            await this.page.locator(deleteListBtn).click();
            await this.page.locator(deleteConfirmationBtn).click();
            await this.page.locator(emptyTaskListHeader).isVisible();        
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
            await this.page.locator(mileStoneOptionsMenu).hover();
            await this.page.locator(deleteMileStoneBtn).isVisible();
            await this.page.locator(deleteMileStoneBtn).hover();
            await this.page.locator(deleteMileStoneBtn).click();
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
