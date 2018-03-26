const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
// 主要控制进程窗口;
const BrowserWindow = electron.BrowserWindow

var mainWindow = null;


const path = require('path')
const url = require('url')


app.on('ready', function() {

    mainWindow = new BrowserWindow({
        // height: 600,
        // width: 800,
        //任务栏；
        autoHideMenuBar:true,
        //
        backgroundColor:'#fff',
        useContentSize:true,
        show:false
    });

    mainWindow.maximize()

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'app/login.html'),
      protocol: 'file:',
      slashes: true
    }))
    mainWindow.once('ready-to-show', () => {
      mainWindow.show()
    })
});



//    electron-prebuilt 安装

/*
    在 windows 在安装过程中会出现安装失败问题，原因主要是在下载 electron-prebuilt 中失败，导致最后安装 electron 失败。
    解决办法：
    访问 https://npm.taobao.org/mirrors/electron 手动下载当前系统对应版本的 electron
    例如：electron-v1.2.3-win32-x64.zip 版本号可以在安装过程中看到。
    然后将下载的 electron-prebuilt 压缩包放在 C:\Users\Administrator\.electron 下，
    最后在项目目录下重新执行 npm install -g electron-prebuilt
*/
