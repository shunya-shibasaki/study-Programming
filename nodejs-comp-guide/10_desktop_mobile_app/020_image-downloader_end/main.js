// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// import { chromium } from "@playwright/test";
const chromePaths = require('chrome-paths');
const { chromium } = require('@playwright/test');
const { shell } = require('electron');
const download = require('image-downloader');
// レンダラープロセスとの連携
ipcMain.handle('fetchImgs', fetchImgs);
ipcMain.handle('saveImgs', saveImgs);

const chrompath = chromePaths.chrome;
const launchOption = { headless: false, slowMo: 500, executablePath: chrompath };
let imgUrls;
async function fetchImgs(event, targetUrl) {
  imgUrls = [];
  console.log(`fetchImgs called [${targetUrl}]`);
  const browser = await chromium.launch(launchOption);
  const page = await browser.newPage();
  await page.goto(targetUrl);

  const imgLocators = page.locator('img');
  const imgCount = await imgLocators.count();

  for (let i = 0; i < imgCount; i++) {
    const imgLocator = imgLocators.locator(`nth=${i}`);
    const imgSrc = await imgLocator.evaluate((node) => node.currentSrc);
    imgUrls.push(imgSrc);
  }

  await browser.close();

  return imgUrls;
}

async function saveImgs(event) {
  console.log('saveImgs called');
  
  const win = BrowserWindow.getFocusedWindow();

  const result = await dialog.showOpenDialog(win, {
    properties: ['openDirectory'],
    defaultPath: '.',
  });

  if (result.canceled) {
    return 'cancel';
  }

  const dest = result.filePaths[0];

  try {

    await imgUrls.map(async (url, index) => {
      const options = {
        url,
        dest,
      };

      return await download
        .image(options)
        .then((result) => {
          console.log('success', result);
        })
        .catch((e) => {
          console.error('error', e);
        });
    });

  } catch (e) {
    return 'failed';
  }

  setTimeout(() => {
    shell.openPath(dest);
  }, 2000);
  
  return 'success';
}
