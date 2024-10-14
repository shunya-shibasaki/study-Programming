const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Googleを開く
    await driver.get('http://www.google.com');

    // 検索ボックスを見つけて「Selenium」と入力し、Enterキーを押す
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

    // 検索結果が表示されるのを待つ
    await driver.wait(until.titleContains('Selenium'), 10000);
  }  catch (err) {
    console.error('Error:', err);
  }
  // quit()は削除してブラウザが閉じないようにする
}

example();
