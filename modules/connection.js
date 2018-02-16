const cmd = require('node-cmd')

module.exports = {
    connect: function(to) {
        cmd.run('gnome-terminal -x sh -c \'command1; command2; exec bash\'')
    }
}