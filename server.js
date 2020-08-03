var express = require('express');
var persons = require('./controller/Persons');
const bodyParser = require('body-parser');
var configPortAndSettings = require('./servConfig/config')


var app = express();


app.get('/Persons',persons.getPersons)
app.use(bodyParser.json())

var server = app.listen(configPortAndSettings.webPort, function () {
    console.log(`Server is running at ${configPortAndSettings.webPort}`);
});