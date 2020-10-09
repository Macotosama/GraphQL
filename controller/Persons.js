var db = require('../baseDeDatos/db');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getAllClienteInformation = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllClienteInformation ",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAllSupierInformation = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllSuplierInformation",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAllInventaryInformation = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllInventaryInformation",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAllInvoicesInformation = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllInvoicesInformation",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getMostExpensiveAmountsSupliers = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getMostExpensiveAmountsSupliers"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getLesstExpensiveAmountsSupliers = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getLesstExpensiveAmountsSupliers"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAVGeAmountsSupliers = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAVGeAmountsSupliers"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getMostExpensiveCustomer = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getMostExpensiveCustomer"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getLessExpensiveCustomer = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getLessExpensiveCustomer"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAVGExpensiveCustomer = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAVGExpensiveCustomer"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getTopProducts = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getTopProducts",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getTopProductsFilter = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getTopProductsFilter "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getMaxCustomesInvoices = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getMaxCustomesInvoices "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getMostQuatitySupplierOrders = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getMostQuatitySupplierOrders "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getAllCategoryNames = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllCategoryNames",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};


exports.getAllCategoriesDeliveryMethodNames = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllCategoriesDeliveryMethodNames",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};


exports.getAllClienteInformationFilter = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getAllClienteInformationFilter "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getAllSuplierInformationFilter = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getAllSuplierInformationFilter "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getAllInventaryInformationFilter = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getAllInventaryInformationFilter "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getAllInvoicesInformationFilter = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute getAllInvoicesInformationFilter "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getAllGrups = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllGrups",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAllSupplierCategories = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllSupplierCategories",function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};

exports.getAllCliente = function(req, resp){
    const par = "'"

    db.executeSQL("Execute getAllCliente"+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{   
            resp.json(data.recordset)
        }
    });
};