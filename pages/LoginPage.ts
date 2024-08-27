import { Locator, Page } from "@playwright/test";

export default class LoginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;
  

  constructor(page:Page){
    this.page = page;
    //Locators
    this.usernameTextBox = page.locator('//input[@id="user-name"]');
    this.passwordTextBox = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="login-button"]');
    
  }

  //Actions
  async goto(url) {
    await this.page.goto(url);
  }

  async login(){
    await this.goto(process.env.URL);
    await this.usernameTextBox.fill('standard_user');
    await this.passwordTextBox.fill('secret_sauce');
    await this.loginButton.click();
  }
}
