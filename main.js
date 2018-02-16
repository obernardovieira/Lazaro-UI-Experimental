const express = require('express')
const app = express()
const electron = require('electron').app
const window = require('./modules/window.js')

/*
    this is a mix between express and electron
    the express is running a webserver, available
    on port 3000 (it's also available through
    the browser) and putting the webserver inside
    an electron app. magic. don't thank me!
*/

/*
    basic express endpoints
*/
app.set('view engine', 'ejs')
app.use("/styles", express.static(__dirname + "/styles"))
app.get('/', window.render)
app.get('/control', window.control)
app.listen(3000, () => console.log('Listening on port 3000!'))
/*
    emulate it with electron
*/
electron.on('ready', window.create)