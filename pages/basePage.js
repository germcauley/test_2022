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
      //await this.page.waitForLoadState('domcontentloaded');  
      await this.page.locator(projectsTab).isVisible();
      await this.page.locator(projectsTab).isEnabled();
      await this.page.locator(projectsTab).hover();
      await this.page.locator(projectsTab).click();
      await this.page.locator(projectsTab).click();      
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

