const electron = require('electron')
const cmd = require('node-cmd')
const TreeView = require('./treeview.js');
const DataSaver = require('./datasaver')
var {app, BrowserWindow, dialog} = electron

module.exports = {

    create: function() {
        let mainWindow = new BrowserWindow({width: 800, height: 600})

        mainWindow.loadURL('http://localhost:3000')

        //cmd.run('gnome-terminal -x sh -c \'command1; command2; exec bash\'')
        
        mainWindow.on('closed', function () {
            mainWindow = null
        })
    },

    render: function(request, response) {
        var treeView = new TreeView()
        var treeSet = treeView.build(DataSaver.load())
        response.render('index', { tableTree: treeSet })
    }
}