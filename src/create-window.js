const path = require('path')
const { BrowserWindow, BrowserView } = require('electron')
const MsynkBrowserWindow = require('./MsynkBrowserWindow/main/MsynkBrowserWindow')

const createWindow = () => {
  const browser = new MsynkBrowserWindow();
  
}

exports.createWindow = createWindow