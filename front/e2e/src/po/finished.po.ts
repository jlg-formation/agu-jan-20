import { browser, by, element } from 'protractor';

export class FinishedPage {
  async clickOnHome() {
    const button = element(by.css('button'));
    await button.click();
  }

}
