function TreeView() { }

function buildHeaderGroup(element) {
    var nElements = element['elements'].length
    var buildedGroup = "<tr><td onclick=\"clickGroupElement(this)\">" + element['name'] + "</td><td></td></tr>"
    for(var i = 0; i < nElements; i++) {
        buildedGroup += buildElementGroup(element['elements'][i], true)  
    }
    return buildedGroup
}

function buildElementGroup(element, child) {
    return "<tr" + ((child == true) ? (" class='group'") : ("")) + "><td onclick=\"clickElement(this)\">" + element['name'] + "</td><td>1</td></tr>"
}

TreeView.prototype.build = function(jsonString) {
    var jsonObj = JSON.parse(jsonString)
    var nElements = jsonObj.length;
    var buildedTable = ""
    for(var i = 0; i < nElements; i++) {
        if(jsonObj[i]['type'] == 'group') {
            buildedTable += buildHeaderGroup(jsonObj[i])
        } else {
            buildedTable += buildElementGroup(jsonObj[i], false)
        }
    }
    return buildedTable
};

TreeView.whenClick = function() {
    //
}

module.exports = TreeView;