/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(3);
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.card-content-title a');

  const firstRestoran = locate('.card-content-title');
  const firstRestoranName = await I.grabTextFrom(firstRestoran);
  I.click(locate('.card-content-title a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card');

  const likedRestoranName = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoranName, likedRestoranName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.card-content-title a');

  const firstRestoran = locate('.card-content-title');
  const firstRestoranName = await I.grabTextFrom(firstRestoran);
  I.click(locate('.card-content-title a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card');

  const likedRestoranName = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoranName, likedRestoranName);

  I.waitForElement('.card-content-title a');
  I.click(locate('.card-content-title a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.card-content-title a');
});
