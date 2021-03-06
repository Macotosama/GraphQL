var express = require('express');
var persons = require('./controller/Persons');
const bodyParser = require('body-parser');
const cors = require('cors')
var configPortAndSettings = require('./servConfig/config')


var app = express();

app.use(express.json())
// app.use(bodyParser());
app.use(bodyParser.json())
app.use(cors())

///
app.get('/getpValidacionDeCliente/:par1/:par2',persons.getpValidacionDeCliente)
app.get('/getpValidacionDeVendedor/:par1/:par2',persons.getpValidacionDeVendedor)
app.get('/getpValidarCorporativo/:par1/:par2',persons.getpValidarCorporativo)
app.get('/getpBusquedaProducto/:par1/:par2',persons.getpBusquedaProducto) 
app.get('/getpCrearNevaCategoria/:par1/:par2',persons.getpCrearNevaCategoria) 
app.get('/getpCrearNevoProducto/:par1/:par2/:par3/:par4/:par5',persons.getpCrearNevoProducto)
app.get('/getpEnviarCategorias',persons.getpEnviarCategorias)
app.get('/getpRetornoInventario',persons.getpRetornoInventario)
app.get('/getpUpadateInventario/:par1/:par2/:par3',persons.getpUpadateInventario)
app.post('/getpRetornoFacturas',persons.getpRetornoFacturas)
app.get('/getpRetornaCategorias',persons.getpRetornaCategorias)
app.get('/getpRetornaProductos',persons.getpRetornaProductos)
app.get('/getpBuscarNombre/:par1/:par2',persons.getpBuscarNombre)
app.post('/getpTotalesDeFacturas',persons.getpTotalesDeFacturas)
app.get('/getpTotalConsolidado/:par1/:par2/:par3',persons.getpTotalConsolidado)
app.get('/getpCrearPersonaVendedor/:par1/:par2/:par3/:par4/:par5/:par6/:par7/:par8/:par9/:par10/:par11/:par12',persons.getpCrearPersonaVendedor)
app.get('/getpCrearPersonaCliente/:par1/:par2/:par3/:par4/:par5/:par6/:par7/:par8/:par9/:par10/:par11/:par12',persons.getpCrearPersonaCliente)
app.get('/getpBuscarProductoCategoriaEnInvenatrio/:par1/:par2',persons.getpBuscarProductoCategoriaEnInvenatrio)
app.get('/getpRetornaProductoNombreIdentificador',persons.getpRetornaProductoNombreIdentificador)
app.get('/getpAgragarAlInventario/:par1/:par2',persons.getpAgragarAlInventario)
app.get('/getpValidarCantidadRequerida/:par1/:par2',persons.getpValidarCantidadRequerida)
app.post('/getpCrearOrdenDeCompra',persons.getpCrearOrdenDeCompra)
app.post('/getpCrearFactura',persons.getpCrearFactura)
app.post('/getpPagonPorInetervalos',persons.getpPagonPorInetervalos) 
app.post('/getpCrearPersonaCorp',persons.getpCrearCorp)

app.post('/getpValidarSiExiteUnCorporativo',persons.pValidarSiExiteUnCorporativo)
app.post('/getpValidarSiExiteUnCliente',persons.pValidarSiExiteUnCliente)
app.post('/getpValidarSiExiteUnVendedor',persons.pValidarSiExiteUnVendedor)
//app.post('/test',function(req,res){
 //   console.log(req.body)
//    res.send({msg: 'Hola'})
//});
var server = app.listen(configPortAndSettings.webPort, function () {
    console.log(`Server is running at ${configPortAndSettings.webPort}`);
});

