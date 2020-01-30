import { browser, by, element } from 'protractor';

export class SetupPage {
  async clickOnAddQuestionButton() {
    const button = element(by.css('button'));
    await button.click();
  }

  async clickOnFinishedButton() {
    const button = element(by.css('button:not(.primary)'));
    await button.click();
  }


}
