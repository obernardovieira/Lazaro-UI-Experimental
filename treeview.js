var util = require('util')

function buildHeaderGroup() {
    // TODO: stuff
}

function buildElementGroup() {
    // TODO: stuff
}

function TreeView() { }

TreeView.hello = function(jsonString) {
    var jsonObj = JSON.parse(jsonString)
    var rootElement = jsonObj['root']
    console.log(jsonObj['root'] instanceof Array)
    var nElements = rootElement.length;
    for(var i = 0; i < nElements; i++) {
        console.log(rootElement[i])
    }
};

module.exports = TreeView;