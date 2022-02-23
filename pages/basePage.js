//locators
const appBody = '.app-body';
const projectsTab = 'a.bg-transparent:nth-child(4)';


exports.BasePage= class BasePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;      
    }

    //methods
    async selectProjectsTab(){
          // Click button:has-text("Projects")
      await this.page.locator('button:has-text("Projects")').click();
      // Click a:has-text("All Projects")
      await Promise.all([
          this.page.waitForNavigation(/*{ url: 'https://automationtesting.teamwork.com/#/projects/list' }*/),
          this.page.locator('a:has-text("All Projects")').click()
    ]); 
        
      }

    async LoginMethodpom() {
        //await this.page.locator('a.ds-rounded:nth-child(5)').click();
        await this.page.locator('#loginemail').type('geraldmcauley@gmail.com');
        await this.page.locator('#loginpassword').type('nRV6#dhkNU6b^dGV');
        await this.page.locator('.w-button').press('Enter');
        await this.page.waitForLoadState('load');
        await this.page.locator(appBody).isEditable();
                   
      }
  }

