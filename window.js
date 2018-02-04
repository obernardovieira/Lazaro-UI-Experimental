const electron = require('electron')
const path = require('path')
const url = require('url')
const cmd = require('node-cmd')
const TreeView = require('./treeview.js');

module.exports = {

    createWindow: function() {
        let mainWindow = new electron.BrowserWindow({width: 800, height: 600})

        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }))

        mainWindow.on('closed', function () {
            mainWindow = null
        })
        cmd.run('gnome-terminal')
        TreeView.hello()
    }
}