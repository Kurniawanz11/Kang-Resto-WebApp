/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(4);
});

Scenario('posting review restaurant', async ({ I }) => {
  const review = 'E2E Testing';

  I.waitForElement('.card-content-title');
  I.click(locate('.card-content-title a').first());

  I.waitForElement('.form-container');
  I.fillField('Name', 'User');
  I.fillField('Review', 'E2E Testing');
  I.click('#submit-review');

  I.see(review, '.restaurant-detail__review .review-container');
});
