const EventEmitter = require('events');
const path = require('path');
const { BrowserWindow } = require("electron");

class MsynkBrowserWindow extends EventEmitter {

  constructor(options = {}) {
    super();
    this.options = options;

    const { width = 800, height = 600 } = options;
    this.window = new BrowserWindow({
      ...options,
      width,
      height
    });

    this.window.setBrowserView(null);
    this.window.loadFile(path.join(__dirname, '../renderer/build/index.html'));
  }

}

module.exports = MsynkBrowserWindow