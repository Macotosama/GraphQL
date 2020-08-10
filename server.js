var express = require('express');
var persons = require('./controller/Persons');
const bodyParser = require('body-parser');
const cors = require('cors')
var configPortAndSettings = require('./servConfig/config')


var app = express();



app.use(bodyParser.json())
app.use(cors())


app.get('/Persons',persons.getPersons)
app.get('/Products',persons.getProducts)
app.get('/Sells',persons.getVentas)
app.get('/Sellers',persons.getVendedores)
app.get('/Proveedors',persons.getProvedores)
app.get('/topProductos',persons.getTopMejoresVendidos)
app.get('/Locations',persons.getLocaciones)
app.get('/AllProcutLocation/:Location',persons.getAllProcutLocation)
var server = app.listen(configPortAndSettings.webPort, function () {
    console.log(`Server is running at ${configPortAndSettings.webPort}`);
});

