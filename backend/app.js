const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json());

app.set('port', process.env.PORT || 8080);

module.exports = app;