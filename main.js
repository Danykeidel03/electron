// npm install electron-updater --save-dev
// npm install electron-builder --save-dev
// install electron-packager --save-dev
// run package-win


const { app, ipcMain, BrowserWindow } = require('electron')
const { exec } = require("child_process");
const { spawn } = require("node:child_process");
const path = require('path')

//añadir desde aqui

const {autoUpdater} = require('electron-updater');

const log = require('electron-log')
log.info('Hello,log')
log.warn('Problemas')
log.transports.file.resolvePath = () => path.join('C:/xampp/htdocs/TRABAJO/GLPI-AGENT', '/logs/main.js')

//hasta aqui

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
  // win.webContents.openDevTools()


  autoUpdater.checkForUpdatesAndNotify()

}

autoUpdater.on("update-available", () => {
  log.info("update-available")
})

autoUpdater.on("checking-for-update", () => {
  log.info("checking-for-update")
})

autoUpdater.on("download-progress", () => {
  log.info("download-progress")
})

autoUpdater.on("update-downloaded", () => {
  log.info("update-downloaded")
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipcMain.on("message", (event) => {

  const { spawn } = require('node:child_process');
  const child = spawn('powershell', ['-F', 'nomequip.ps1']);
  child.stdout.on('data', function (data) {
    console.log("salida : ")
    const salida = data.toString()
    console.log(data.toString())
    event.sender.send("reply", salida);
  })
})

