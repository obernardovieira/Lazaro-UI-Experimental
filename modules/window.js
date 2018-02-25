const electron = require('electron')
const TreeView = require('./treeview.js');
const DataSaver = require('./datasaver.js')
var {app, BrowserWindow} = electron

module.exports = {

    /*
        create window to run express app inside
    */
    create: function() {
        let mainWindow = new BrowserWindow({width: 800, height: 600})
        mainWindow.loadURL('http://localhost:3000')
        mainWindow.on('closed', function () {
            mainWindow = null
        })
        mainWindow.setMenu(null);
    },

    /*
        render main window with express
    */
    render: function(request, response) {
        var treeView = new TreeView()
        var treeSet = treeView.build(DataSaver.load())
        response.render('index', { tableTree: treeSet })
    },

    /*
        render new window with express
    */
    new: function(request, response) {
        response.render('new')
    },

    /*
        render edit window with express
    */
    edit: function(request, response) {
        response.render('edit')
    }
}