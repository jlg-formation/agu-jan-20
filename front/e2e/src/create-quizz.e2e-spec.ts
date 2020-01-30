import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './po/create.po';
import { SetupPage } from './po/setup.po';
import { AddQuestionPage } from './po/add-question.po';
import { FinishedPage } from './po/finished.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;
  let setupPage: SetupPage;
  let addQuestionPage: AddQuestionPage;
  let finishedPage: FinishedPage;

  beforeEach(() => {
    page = new AppPage();
    createPage = new CreatePage();
    setupPage = new SetupPage();
    addQuestionPage = new AddQuestionPage();
    finishedPage = new FinishedPage();
  });

  it('should create a quizz', async () => {
    page.navigateTo();
    await browser.sleep(2000);
    await page.clickOnCreateQuizzButton();
    await browser.sleep(2000);

    await createPage.enter('toto');
    await browser.sleep(2000);

    await createPage.clickOnNext();
    await browser.sleep(2000);

    await setupPage.clickOnAddQuestionButton();
    await browser.sleep(2000);

    await addQuestionPage.fillQuestion({
      label: 'quelle est la plus jolie capitale ?',
      answerA: 'Paris',
      answerB: 'Londres',
      answerC: 'Berlin',
      answerD: 'Rome',
      correctAnswer: 'A'
    });
    await browser.sleep(2000);

    await addQuestionPage.clickOnNext();
    await browser.sleep(2000);

    await setupPage.clickOnFinishedButton();
    await browser.sleep(2000);

    await finishedPage.clickOnHome();
    await browser.sleep(2000);


    expect(page.getTitleText()).toEqual('Quizz');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
