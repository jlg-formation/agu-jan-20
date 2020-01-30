import { browser, by, element } from 'protractor';

export class CreatePage {
  async enter(name: string) {
    const input = element(by.css('input'));
    await input.clear();
    await input.sendKeys(name);
  }

  async clickOnNext() {
    const button = element(by.css('button'));
    await button.click();
  }

}
