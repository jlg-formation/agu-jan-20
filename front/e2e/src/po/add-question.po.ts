import { browser, by, element } from 'protractor';
import { Question } from '../../../src/app/interfaces/question';

export class AddQuestionPage {
  async fillQuestion(q: Question) {
    const textarea = element(by.css('textarea'));
    await textarea.clear();
    await textarea.sendKeys(q.label);

    for (const letter of ['A', 'B', 'C', 'D']) {
      const input = element(by.css(`label.${letter} input[type=text]`));
      await input.clear();
      await input.sendKeys(q['answer' + letter]);
      await browser.sleep(2000);

    }
    const radio = element(by.css(`label.${q.correctAnswer} input[type=radio]`));
    await radio.click();
  }
  async clickOnNext() {
    await element(by.css('button.primary')).click();
  }
}
