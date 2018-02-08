const express = require('express')
const app = express()
const window = require('./modules/window.js')
const electron = require('electron').app

app.set('view engine', 'ejs')
app.use("/styles", express.static(__dirname + "/styles"))
app.get('/', window.render)
app.listen(3000, () => console.log('Example app listening on port 3000!'))

electron.on('ready', window.create)