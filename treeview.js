var util = require('util')

function buildHeaderGroup(element) {
    var nElements = element['elements'].length
    var buildedGroup = "<tr><td>" + element['name'] + "</td><td>1</td>"
    for(var i = 0; i < nElements; i++) {
        buildedGroup += buildElementGroup(element['elements'][i])  
    }
    buildedGroup += "</tr>"
    return buildedGroup
}

function buildElementGroup(element) {
    return "<tr><td>" + element['name'] + "</td><td>1</td></tr>"
}

function TreeView() { }

TreeView.prototype.build = function(jsonString) {
    var jsonObj = JSON.parse(jsonString)
    var nElements = jsonObj.length;
    var buildedTable = ""
    for(var i = 0; i < nElements; i++) {
        if(jsonObj[i]['type'] == 'group') {
            buildedTable += buildHeaderGroup(jsonObj[i])
        } else {
            buildedTable += buildElementGroup(jsonObj[i])
        }
    }
    return buildedTable
};

module.exports = TreeView;