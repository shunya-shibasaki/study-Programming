const { Builder, By, until, Actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // キャリアチケット スカウトを開く
    await driver.get('https://biz.careerticket.jp/');

    // ユーザー名を入力
    const userName = 'y.kagaya@aimygp.com'
    await driver.findElement(By.name('email')).sendKeys(userName);

    // パスワードを入力
    const passWord = 'business2022'
    await driver.findElement(By.name('password')).sendKeys(passWord);

    // ログインボタンをクリック
    await driver.findElement(By.className('login_submit__W_u8X Button_primary___gC18 Button_oval__XvCDT')).click();

    // 26卒か25卒にタブを切り替え
    const changeTab = await driver.wait(until.elementLocated(By.xpath('//header//button[@type="button"]')), 30000);
    await driver.wait(until.elementIsVisible(changeTab), 30000)
    await changeTab.click();
    
    await driver.sleep(2000); // チェック後2秒待機

    const spanElement = await driver.wait(
      until.elementLocated(By.xpath("//header//span[text()='26']")), 10000
    );
    await driver.wait(until.elementIsVisible(spanElement), 10000);
    await spanElement.click();

    await driver.sleep(2000); // チェック後2秒待機

    // 学生検索タブをクリック
    const studentSearchTab = await driver.wait(until.elementLocated(By.xpath('//header//a[@href="/search/"]')), 30000);
    await driver.wait(until.elementIsVisible(studentSearchTab), 30000)
    await studentSearchTab.click();

    // 「お住まい」セレクトボタンを選択
    const element = await driver.wait(until.elementLocated(By.xpath('//button//span[@class="SearchFilter_triggerLabel__4IE8C" and text()="お住まい"]')), 30000)
    await driver.wait(until.elementIsVisible(element), 30000);
    await element.click();

    // ---------------------------------
    // 該当するチェックボックスを特定する
    // ---------------------------------
    // 埼玉県のチェックボックスを特定
    const saitamaCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox' and @value='11']/ancestor::label//span[text()='埼玉県']"));

    // チェックボックスがチェックされていない場合のみチェックを付ける
    const isSaitamaChecked = await saitamaCheckbox.isSelected();
    if (!isSaitamaChecked) {
      await saitamaCheckbox.click();
      await driver.sleep(3000); // チェック後3秒待機
    }

    // 千葉県のチェックボックスを特定
    const chibaCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox' and @value='12']/ancestor::label//span[text()='千葉県']"));

    // チェックボックスがチェックされていない場合のみチェックを付ける
    const isChibaCheckbox = await chibaCheckbox.isSelected();
    if (!isChibaCheckbox) {
      await chibaCheckbox.click();
      await driver.sleep(3000); // チェック後3秒待機
    }

    // 東京都のチェックボックスを特定
    const tokyoCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox' and @value='13']/ancestor::label//span[text()='東京都']"));

    // チェックボックスがチェックされていない場合のみチェックを付ける
    const isTokyoCheckbox = await tokyoCheckbox.isSelected();
    if (!isTokyoCheckbox) {
      await tokyoCheckbox.click();
      await driver.sleep(3000); // チェック後3秒待機
    }

    // 神奈川県のチェックボックスを特定
    const kanagawaCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox' and @value='14']/ancestor::label//span[text()='神奈川県']"));

    // チェックボックスがチェックされていない場合のみチェックを付ける
    const isKanagawaCheckbox = await kanagawaCheckbox.isSelected();
    if (!isKanagawaCheckbox) {
      await kanagawaCheckbox.click();
      await driver.sleep(3000); // チェック後3秒待機
    }

    // 「お住まい」モーダル画面を閉じる
    const clauseElement = await driver.wait(until.elementLocated(By.xpath('//button//span[@class="SearchFilter_triggerLabel__4IE8C" and text()="お住まい"]')), 30000)
    await driver.wait(until.elementIsVisible(clauseElement), 30000);
    await clauseElement.click();

    // idが'StudentCard_C'で始まる全てのdiv要素を取得
    const allDivs = await driver.findElements(By.xpath("//div[starts-with(@id, 'StudentCard_C')]"));
    if (allDivs.length === 0) {
      console.log('No elements found');
      return;
    }

    // 一番上の要素を特定
    // 最初に見つけた要素が一番上にあると仮定する（要素の位置に基づいて変更可能）
    const topDiv = allDivs[0];

    // 一番上の要素が表示されるのを待つ
    await driver.wait(until.elementIsVisible(topDiv), 10000);

    // 一番上の要素をクリック
    await topDiv.click();
    console.log('Clicked on the top div element');

    // 操作をループさせる
    for (let i = 0; i < 1500; i++)  {
      console.log('ループします')
      console.log(`現在 ${i + 1}回目のループ`);
      try {
      // 「話したい」ボタンをクリック
      const clickElement = await driver.wait(
        until.elementLocated(By.xpath('//ul//li//div//button[@type="button" and @class="StudentDetailCard_talk__PFm86 Button_primary___gC18 Button_oval__XvCDT"]')), 10000
      )
      await driver.wait(until.elementIsVisible(clickElement), 10000);
      await clickElement.click();

      await driver.sleep(2000); // チェック後2秒待機

      // 送信ボタンを押下する
      const sendButton = await driver.wait(
      until.elementLocated(By.xpath('//form//div[@class="scout-card_submit__wLJQ_"]//button[@type="button" and text()="送信を確定する"]')), 10000
     );
     // Actions APIを使用してマウスクリックをシミュレート
     const actions = driver.actions({ async: true });
     await actions.move({ origin: sendButton }).click().perform();

      await driver.sleep(4000); // チェック後4秒待機

      // 次へボタンを押下する
      const nextClick = await driver.wait(
        until.elementLocated(By.xpath('//div//button[@type="button" and @class="StudentDetailCardSlideButton_next__aJXGY"]')), 10000
      )
      await driver.wait(until.elementIsVisible(nextClick), 10000);
      await nextClick.click();
      
      await driver.sleep(2000); // チェック後2秒待機
    } catch (err) {
      console.error(`Error during iteration ${i}:`, err)
    }
      console.log(`${i + 1}回終わりました。`);
    }
  }  catch (err) {
    console.error('Error:', err);
  }
  // quit()は削除してブラウザが閉じないようにする
}

example();