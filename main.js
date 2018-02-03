const electron = require('electron')
const app = electron.app

const window = require('./window.js')

app.on('ready', window.createWindow)
