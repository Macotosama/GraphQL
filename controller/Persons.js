var db = require('../baseDeDatos/db');




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getpValidacionDeCliente = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pValidacionDeCliente "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpValidacionDeVendedor = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pValidacionDeVendedor "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpBusquedaProducto = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pBusquedaProducto "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearNevaCategoria = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearNevaCategoria "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearNevaCategoria = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearNevaCategoria "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearNevoProducto = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearNevoProducto "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpEnviarCategorias = function(req, resp){
    const par = "'"

    db.executeSQL("Execute pEnviarCategorias",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getpRetornoInventario = function(req, resp){
    const par = "'"

    db.executeSQL("Execute pRetornoInventario",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getpUpadateInventario = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pUpadateInventario "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getpRetornoFacturas = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pRetornoFacturas "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpRetornaCategorias = function(req, resp){
    const par = "'"

    db.executeSQL("Execute pRetornaCategorias",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};


exports.getpRetornaProductos = function(req, resp){
    const par = "'"

    db.executeSQL("Execute pRetornaProductos",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};


exports.getpBuscarNombre = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pBuscarNombre "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpTotalesDeFacturas = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pTotalesDeFacturas "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+""+coma+par+(req.params.par4)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpTotalConsolidado = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pTotalConsolidado "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpPagar = function(req, resp){
    const par = "'"

    db.executeSQL("Execute pPagar"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};


exports.getpCrearPersona = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearPersona "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+""+coma+par+(req.params.par4)+par+""+coma+par+(req.params.par5)+par+""+coma+par+(req.params.par6)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getpCrearVendedor = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearVendedor "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearCorporativo = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearCorporativo "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearCliente = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearCliente "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearPersonaVendedor = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearPersonaVendedor "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+""+coma+par+(req.params.par4)+par+""+coma+par+(req.params.par5)+par+""+coma+par+(req.params.par6)+par+""+coma+par+(req.params.par7)+par+""+coma+par+(req.params.par8)+par+""+coma+par+(req.params.par9)+par+""+coma+par+(req.params.par10)+par+""+coma+par+(req.params.par11)+par+""+coma+par+(req.params.par12)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpCrearPersonaCliente = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pCrearPersonaVendedor "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+""+coma+par+(req.params.par4)+par+""+coma+par+(req.params.par5)+par+""+coma+par+(req.params.par6)+par+""+coma+par+(req.params.par7)+par+""+coma+par+(req.params.par8)+par+""+coma+par+(req.params.par9)+par+""+coma+par+(req.params.par10)+par+""+coma+par+(req.params.par11)+par+""+coma+par+(req.params.par12)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getpBuscarProductoCategoria = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute pBuscarProductoCategoria "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};