const electron = require('electron')
const path = require('path')
const url = require('url')
const cmd = require('node-cmd')
const TreeView = require('./treeview.js');
const DataSaver = require('./datasaver')
var {app, BrowserWindow, ipcMain} = electron

module.exports = {

    createWindow: function() {
        let mainWindow = new BrowserWindow({width: 800, height: 600})

        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }))

        //cmd.run('gnome-terminal -x sh -c \'command1; command2; exec bash\'')
        var treeView = new TreeView()
        var treeSet = treeView.build(DataSaver.load())
        
        ipcMain.on('requestTree', (event, status) => {
            event.returnValue = treeSet
        })
        
        mainWindow.on('closed', function () {
            mainWindow = null
        })
    }
}