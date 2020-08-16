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
app.get('/topPeoresProductos',persons.getTopPeoresVendidos)
app.get('/InforVendedorEnRecursosHumanos/:Info',persons.getProcInforVendedorEnRecursosHumanos)
app.get('/procCreditCard',persons.getProcCreditCard)
app.get('/procTerritory',persons.getProcTerritory)
app.get('/procShoppingCartItem',persons.getProcShoppingCartItem)
app.get('/procSalesTaxRate',persons.getProcSalesTaxRate)
app.get('/getProcDistribuidores/:par1/:par2/par3',persons.filtroProcDistribuidores)
app.get('/getProcVendedores/:par1',persons.filtroProcVendedores)
app.get('/getProcPersosnCustomer/:par1',persons.filtroProcPersosnCustomer)
app.get('/getAllPeople',persons.getAllPeopele)
app.get('/getprocInsertarEnAuditoria/:par1',persons.getProcInsertarEnAuditoria)
app.get('/getProcNoBorrar/:par1',persons.getProNoBorrar)
app.get('/tablaAuditoria',persons.getTablaAuditoria)
app.get('/getProcInfrmacionBasicaProduct/:par1',persons.getProcInfrmacionBasicaProduct)
app.get('/getProcInformacionBasicaPersonCreditCard/:par1',persons.getProcInformacionBasicaPersonCreditCard)
app.get('/getProcInfomacionBasicaSalesOrderDetail/:par1',persons.getProcInfomacionBasicaSalesOrderDetail)
app.get('/getProcInformacionBasicaSalesPerson/:par1',persons.getProcInformacionBasicaSalesPerson)
app.get('/getProcInformacionBasicaCustomers/:par1',persons.getProcInformacionBasicaCustomers)
app.get('/getProcInformacionBasicaVendor/:par1',persons.getProcInformacionBasicaVendor)
app.get('/getProcInformacionBasicaVendor2/:par1',persons.getProcInformacionBasicaVendor2)
var server = app.listen(configPortAndSettings.webPort, function () {
    console.log(`Server is running at ${configPortAndSettings.webPort}`);
});

