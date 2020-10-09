var express = require('express');
var persons = require('./controller/Persons');
const bodyParser = require('body-parser');
const cors = require('cors')
var configPortAndSettings = require('./servConfig/config')


var app = express();



app.use(bodyParser.json())
app.use(cors())

///
app.get('/AllClienteInformation',persons.getAllClienteInformation)
app.get('/getAllSupierInformation',persons.getAllSupierInformation)
app.get('/getAllInventaryInformation',persons.getAllInventaryInformation)
app.get('/getAllInvoicesInformation',persons.getAllInvoicesInformation)
app.get('/getMostExpensiveAmountsSupliers/:par1',persons.getMostExpensiveAmountsSupliers)
app.get('/getLesstExpensiveAmountsSupliers/:par1',persons.getLesstExpensiveAmountsSupliers)
app.get('/getAVGeAmountsSupliers/:par1',persons.getAVGeAmountsSupliers)
app.get('/getMostExpensiveCustomer/:par1',persons.getMostExpensiveCustomer)
app.get('/getLessExpensiveCustomer/:par1',persons.getLessExpensiveCustomer)
app.get('/getAVGExpensiveCustomer/:par1',persons.getAVGExpensiveCustomer)
app.get('/getTopProducts',persons.getTopProducts)
app.get('/getTopProductsFilter/:par1/:par2',persons.getTopProductsFilter)
app.get('/getMaxCustomesInvoices/:par1/:par2',persons.getMaxCustomesInvoices)
app.get('/getMostQuatitySupplierOrders/:par1/:par2',persons.getMostQuatitySupplierOrders)
app.get('/getAllCategoryNames',persons.getAllCategoryNames)
app.get('/getAllCategoriesDeliveryMethodNames',persons.getAllCategoriesDeliveryMethodNames)

app.get('/getAllClienteInformationFilter/:par1/:par2/:par3',persons.getAllClienteInformationFilter)
app.get('/getAllSuplierInformationFilter/:par1/:par2/:par3',persons.getAllSuplierInformationFilter)
app.get('/getAllInventaryInformationFilter/:par1/:par2/:par3',persons.getAllInventaryInformationFilter)
app.get('/getAllGrups',persons.getAllGrups)
app.get('/getAllInvoicesInformationFilter/:par1/:par2/:par3',persons.getAllInvoicesInformationFilter)
app.get('/getAllSupplierCategories',persons.getAllSupplierCategories)

app.get('/getAllCliente/:par1',persons.getAllCliente)
var server = app.listen(configPortAndSettings.webPort, function () {
    console.log(`Server is running at ${configPortAndSettings.webPort}`);
});

