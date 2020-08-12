var db = require('../baseDeDatos/db');

exports.getPersons = function(req, resp){
    db.executeSQL("select top 100 BusinessEntityID,PersonType,convert(int,NameStyle)NameStyle,Title,FirstName,MiddleName,LastName,Suffix,EmailPromotion,convert (varchar(max),AdditionalContactInfo)AdditionalContactInfo,convert (varchar(max),Demographics)Demographics,rowguid,ModifiedDate from AdventureWorks2017.Person.Person ORDER BY BusinessEntityID ",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getTablaAuditoria = function(req, resp){
    db.executeSQL("Select * from AdventureWorks2017.dbo.Auditoria",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getProducts = function(req, resp){
    db.executeSQL("select AdventureWorks2017.Production.Product.ProductID,(AdventureWorks2017.Production.Product.Name)ProductName,"
   +" (AdventureWorks2017.Production.Product.ProductNumber)ProductNumber,"
   +" AdventureWorks2017.Sales.SalesOrderDetail.UnitPrice,"
   +" AdventureWorks2017.Production.Product.Color,AdventureWorks2017.Production.Product.ProductLine,"
   +" AdventureWorks2017.Production.Product.Style,AdventureWorks2017.Production.Product.SellStartDate,"
   +" AdventureWorks2017.Production.Product.SellEndDate,AdventureWorks2017.Production.Product.Size,"
   +" (AdventureWorks2017.Production.ProductSubcategory.Name)SubCategory,(AdventureWorks2017.Production.ProductCategory.Name)CategoryName,(AdventureWorks2017.Production.ProductModel.Name)ProductModel,"
   +" (AdventureWorks2017.Production.ProductInventory.Quantity)Quantity,(AdventureWorks2017.Production.Location.Name)LocationName "
   +" from AdventureWorks2017.Production.Product "
   +" inner join AdventureWorks2017.Sales.SalesOrderDetail "
   +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Sales.SalesOrderDetail.ProductID "
   +" inner join AdventureWorks2017.Production.ProductSubcategory "
   +" on AdventureWorks2017.Production.Product.ProductSubcategoryID = AdventureWorks2017.Production.ProductSubcategory.ProductSubcategoryID "
   +" inner join AdventureWorks2017.Production.ProductCategory "
   +" on AdventureWorks2017.Production.ProductSubcategory.ProductCategoryID = AdventureWorks2017.Production.ProductCategory.ProductCategoryID "
   +" inner join AdventureWorks2017.Production.ProductModel "
   +" on AdventureWorks2017.Production.Product.ProductModelID = AdventureWorks2017.Production.ProductModel.ProductModelID " 
   +" inner join AdventureWorks2017.Production.ProductInventory "
   +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Production.ProductInventory.ProductID "
   +" inner join AdventureWorks2017.Production.Location "
   +" on AdventureWorks2017.Production.ProductInventory.LocationID = AdventureWorks2017.Production.Location.LocationID" 
   +" ORDER BY AdventureWorks2017.Production.Product.ProductID",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getVentas = function(req, resp){
    db.executeSQL("select top 1000 AdventureWorks2017.Sales.SalesOrderDetail.SalesOrderID, " 
    +" AdventureWorks2017.Sales.SalesOrderDetail.ProductID," 
    +" AdventureWorks2017.Sales.SalesOrderHeader.RevisionNumber," 
    +" AdventureWorks2017.Sales.SpecialOffer.Description," 
    +" AdventureWorks2017.Sales.SalesOrderDetail.UnitPrice," 
    +" AdventureWorks2017.Sales.SalesOrderHeader.CustomerID," 
    +" (AdventureWorks2017.Person.Person.FirstName +' '+AdventureWorks2017.Person.Person.MiddleName+' '+AdventureWorks2017.Person.Person.LastName)FullNameCustomer," 
    +" TablaResult.FullNameSalesPerson," 
    +" TablaResult.Bonus," 
    +" TablaResult.SalesLastYear," 
    +" TablaResult.CommissionPct" 
    +" from  AdventureWorks2017.Sales.SalesOrderDetail " 
    +" inner join AdventureWorks2017.Sales.SalesOrderHeader" 
    +" on AdventureWorks2017.Sales.SalesOrderDetail.SalesOrderID = AdventureWorks2017.Sales.SalesOrderHeader.SalesOrderID" 
    +" inner join AdventureWorks2017.Sales.Customer" 
    +" on AdventureWorks2017.Sales.SalesOrderHeader.CustomerID = AdventureWorks2017.Sales.Customer.CustomerID" 
    +" inner join AdventureWorks2017.Person.Person " 
    +" on AdventureWorks2017.Sales.Customer.PersonID  = AdventureWorks2017.Person.Person.BusinessEntityID" 
    +" inner join  " 
    +" (select AdventureWorks2017.Person.Person.BusinessEntityID," 
    +" AdventureWorks2017.Sales.SalesPerson.Bonus," 
    +" AdventureWorks2017.Sales.SalesPerson.CommissionPct," 
    +" AdventureWorks2017.Sales.SalesPerson.SalesLastYear," 
    +" (AdventureWorks2017.Person.Person.FirstName +' '+AdventureWorks2017.Person.Person.MiddleName+' '+AdventureWorks2017.Person.Person.LastName)FullNameSalesPerson" 
    +" from AdventureWorks2017.Sales.SalesPerson" 
    +" inner join AdventureWorks2017.Person.Person" 
    +" on AdventureWorks2017.Sales.SalesPerson.BusinessEntityID = AdventureWorks2017.Person.Person.BusinessEntityID)as TablaResult" 
    +" on TablaResult.BusinessEntityID = AdventureWorks2017.Sales.SalesOrderHeader.SalesPersonID" 
    +" inner join AdventureWorks2017.Sales.SpecialOffer "
    +" on AdventureWorks2017.Sales.SalesOrderDetail.SpecialOfferID = AdventureWorks2017.Sales.SpecialOffer.SpecialOfferID "
    +" ORDER BY " 
    +" AdventureWorks2017.Sales.SalesOrderDetail.SalesOrderID",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getVendedores = function(req, resp){
    db.executeSQL("select AdventureWorks2017.Sales.SalesPerson.BusinessEntityID,  "
    +" (AdventureWorks2017.Person.Person.FirstName+' '+AdventureWorks2017.Person.Person.MiddleName+' '+AdventureWorks2017.Person.Person.LastName)FullName,  "
    +" AdventureWorks2017.Sales.SalesPersonQuotaHistory.SalesQuota, "
    +" AdventureWorks2017.HumanResources.JobCandidate.JobCandidateID,  "
    +" AdventureWorks2017.HumanResources.Employee.Gender,  "
    +" AdventureWorks2017.HumanResources.Employee.VacationHours, " 
    +" AdventureWorks2017.HumanResources.Employee.OrganizationLevel, " 
    +" AdventureWorks2017.HumanResources.Employee.SickLeaveHours,  "
    +" AdventureWorks2017.HumanResources.EmployeePayHistory.PayFrequency, "
    +" AdventureWorks2017.HumanResources.EmployeePayHistory.Rate, "
    +" AdventureWorks2017.Sales.SalesPerson.CommissionPct,  "
    +" AdventureWorks2017.Sales.SalesPerson.SalesLastYear,  "
    +" (AdventureWorks2017.HumanResources.Department.Name)DepartmentName,  "
    +" AdventureWorks2017.HumanResources.Department.GroupName "
    +" from  AdventureWorks2017.Sales.SalesPerson "
    +" inner join AdventureWorks2017.Person.Person "
    +" on AdventureWorks2017.Sales.SalesPerson.BusinessEntityID = AdventureWorks2017.Person.Person.BusinessEntityID "
    +" inner join AdventureWorks2017.Sales.SalesPersonQuotaHistory "
    +" on AdventureWorks2017.Sales.SalesPerson.BusinessEntityID = AdventureWorks2017.Sales.SalesPersonQuotaHistory.BusinessEntityID "
    +" inner join AdventureWorks2017.HumanResources.JobCandidate "
    +" on AdventureWorks2017.Person.Person.BusinessEntityID = AdventureWorks2017.HumanResources.JobCandidate.BusinessEntityID "
    +" inner join AdventureWorks2017.HumanResources.Employee "
    +" on AdventureWorks2017.Person.Person.BusinessEntityID = AdventureWorks2017.HumanResources.Employee.BusinessEntityID "
    +" inner join AdventureWorks2017.HumanResources.EmployeePayHistory "
    +" on AdventureWorks2017.Person.Person.BusinessEntityID = AdventureWorks2017.HumanResources.EmployeePayHistory.BusinessEntityID "
    +" inner join AdventureWorks2017.HumanResources.EmployeeDepartmentHistory "
    +" on AdventureWorks2017.Person.Person.BusinessEntityID = AdventureWorks2017.HumanResources.EmployeeDepartmentHistory.BusinessEntityID "
    +" inner join AdventureWorks2017.HumanResources.Department "
    +" on AdventureWorks2017.HumanResources.EmployeeDepartmentHistory.DepartmentID = AdventureWorks2017.HumanResources.Department.DepartmentID "
    +" ORDER BY AdventureWorks2017.Sales.SalesPerson.BusinessEntityID", function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.getProvedores = function(req, resp){
    db.executeSQL("select top 1000"
    +" AdventureWorks2017.Purchasing.ProductVendor.BusinessEntityID, "
    +" AdventureWorks2017.Purchasing.Vendor.Name, "
    +" AdventureWorks2017.Purchasing.Vendor.PurchasingWebServiceURL, "
   // +" AdventureWorks2017.Purchasing.Vendor.AccountNumber, "
    +" AdventureWorks2017.Purchasing.ProductVendor.MaxOrderQty, "
    +" AdventureWorks2017.Purchasing.ProductVendor.MinOrderQty, "
    +" AdventureWorks2017.Purchasing.ProductVendor.StandardPrice, "
    +" (AdventureWorks2017.Production.Product.Name)Product, "
    +" (AdventureWorks2017.Production.ProductCategory.Name)ProductCategory, "
    +" (AdventureWorks2017.Production.ProductSubcategory.Name)ProductSubcategory, "
    +" AdventureWorks2017.Production.Product.StandardCost, "
    +" AdventureWorks2017.Purchasing.PurchaseOrderDetail.OrderQty, "
    +" AdventureWorks2017.Purchasing.PurchaseOrderDetail.RejectedQty, "
    +" AdventureWorks2017.Purchasing.PurchaseOrderDetail.ReceivedQty, "
    +" AdventureWorks2017.Purchasing.PurchaseOrderDetail.StockedQty, "
    +" AdventureWorks2017.Purchasing.PurchaseOrderHeader.SubTotal "
    +" from AdventureWorks2017.Purchasing.Vendor "
    +" inner join AdventureWorks2017.Purchasing.ProductVendor "
    +" on AdventureWorks2017.Purchasing.Vendor.BusinessEntityID = AdventureWorks2017.Purchasing.ProductVendor.BusinessEntityID "
    +" inner join AdventureWorks2017.Production.Product "
    +" on AdventureWorks2017.Purchasing.ProductVendor.ProductID = AdventureWorks2017.Production.Product.ProductID "
    +" inner join AdventureWorks2017.Purchasing.PurchaseOrderDetail "
    +" on  AdventureWorks2017.Production.Product.ProductID =  AdventureWorks2017.Purchasing.PurchaseOrderDetail.ProductID "
    +" inner join AdventureWorks2017.Purchasing.PurchaseOrderHeader "
    +" on  AdventureWorks2017.Purchasing.PurchaseOrderDetail.PurchaseOrderDetailID = AdventureWorks2017.Purchasing.PurchaseOrderHeader.PurchaseOrderID "
    +" inner join AdventureWorks2017.Production.ProductSubcategory "
    +" on AdventureWorks2017.Production.Product.ProductSubcategoryID = AdventureWorks2017.Production.ProductSubcategory.ProductSubcategoryID "
    +" inner join AdventureWorks2017.Production.ProductCategory "
    +" on  AdventureWorks2017.Production.ProductSubcategory.ProductCategoryID =  AdventureWorks2017.Production.ProductCategory.ProductCategoryID "
   +" ORDER BY AdventureWorks2017.Purchasing.ProductVendor.BusinessEntityID",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getTopMejoresVendidos = function(req, resp){
    db.executeSQL("select DISTINCT TOP 6 "
    +" AdventureWorks2017.Production.Product.ProductID, "
    +" AdventureWorks2017.Production.Product.Name ProductName, "
    +" AdventureWorks2017.Production.Product.ProductNumber ProductNumber, "
    +" (select AdventureWorks2017.dbo.Tacataca(Product.ProductID) ) as UnitPrice, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" (AdventureWorks2017.Production.ProductSubcategory.Name)SubCategory, "
    +" (AdventureWorks2017.Production.ProductCategory.Name)CategoryName, "
    +" (AdventureWorks2017.Production.ProductModel.Name)ProductModel "
    
    +" from AdventureWorks2017.Production.Product "
    +" inner join AdventureWorks2017.Sales.SalesOrderDetail "
    +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Sales.SalesOrderDetail.ProductID "
    +" inner join AdventureWorks2017.Production.ProductSubcategory "
    +" on AdventureWorks2017.Production.Product.ProductSubcategoryID = AdventureWorks2017.Production.ProductSubcategory.ProductSubcategoryID "
    +" inner join AdventureWorks2017.Production.ProductCategory "
    +" on AdventureWorks2017.Production.ProductSubcategory.ProductCategoryID = AdventureWorks2017.Production.ProductCategory.ProductCategoryID "
    +" inner join AdventureWorks2017.Production.ProductModel "
    +" on AdventureWorks2017.Production.Product.ProductModelID = AdventureWorks2017.Production.ProductModel.ProductModelID "  
    +" inner join AdventureWorks2017.Production.ProductInventory "
    +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Production.ProductInventory.ProductID "
    +" inner join AdventureWorks2017.Production.Location "
    +" on AdventureWorks2017.Production.ProductInventory.LocationID = AdventureWorks2017.Production.Location.LocationID "
    +" group by AdventureWorks2017.Production.Product.ProductID, AdventureWorks2017.Production.Product.Name, "
    +" AdventureWorks2017.Production.Product.ProductNumber, "
    +" UnitPrice, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" AdventureWorks2017.Production.ProductSubcategory.Name, "
    +" AdventureWorks2017.Production.ProductCategory.Name, "
    +" AdventureWorks2017.Production.ProductModel.Name "
    
    +" order by UnitPrice desc, "
    +" AdventureWorks2017.Production.Product.ProductID, AdventureWorks2017.Production.Product.Name, "
    +" AdventureWorks2017.Production.Product.ProductNumber, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" AdventureWorks2017.Production.ProductSubcategory.Name, "
    +" AdventureWorks2017.Production.ProductCategory.Name, "
    +" AdventureWorks2017.Production.ProductModel.Name",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getLocaciones = function(req, resp){
    db.executeSQL("select distinct ( AdventureWorks2017.Production.Location.Name)LocationName  from "
    +" AdventureWorks2017.Production.Location "
    +" order by LocationName ",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getAllProcutLocation = function(req, resp){
    const par = "'"
    //return console.log("Execute procReturnAllProcutLocation "+par+(req.params.Location)+par+"".toString())
    
    db.executeSQL("Execute procReturnAllProcutLocation "+par+(req.params.Location)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
}; 
exports.getProcInsertarEnAuditoria = function(req, resp){
    const par = "'"
    const parametro = Math.floor(Math.random() * 101);  
    db.executeSQL("Execute procInsertarEnAuditoria "+par+(req.params.par1)+par+","+par+(parametro)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getProcInsertarEnAuditoria = function(req, resp){
    const par = "'"
    const parametro = Math.floor(Math.random() * 101);  
    db.executeSQL("Execute procInsertarEnAuditoria "+par+(req.params.par1)+par+","+par+(parametro)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};exports.getProNoBorrar = function(req, resp){
    const par = "'"
    const parametro = Math.floor(Math.random() * 101);  
    db.executeSQL("Execute noBorrar "+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getProcInforVendedorEnRecursosHumanos = function(req, resp){
    const par = "'"

    db.executeSQL("Execute procInforVendedorEnRecursosHumanos "+par+(req.params.Info)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getProcCreditCard = function(req, resp){

    db.executeSQL("Execute procCreditCard".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getProcTerritory = function(req, resp){

    db.executeSQL("Execute procTerritory".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getProcShoppingCartItem = function(req, resp){

    db.executeSQL("Execute procShoppingCartItem".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};



exports.getProcSalesTaxRate = function(req, resp){

    db.executeSQL("Execute procSalesTaxRate".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};


exports.filtroProcDistribuidores = function(req, resp){
    const par = "'"
    const coma = ","

    db.executeSQL("Execute procDistribuidores "+par+(req.params.par1)+par+""+coma+par+(req.params.par2)+par+""+coma+par+(req.params.par3)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.filtroProcVendedores = function(req, resp){
    const par = "'"

    db.executeSQL("Execute procVendedores "+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.filtroProcPersosnCustomer = function(req, resp){
    const par = "'"


    db.executeSQL("Execute procPersosnCustomer "+par+(req.params.par1)+par+"".toString(),function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};

exports.getAllPeopele = function(req, resp){
    db.executeSQL("select AdventureWorks2017.Person.Person.BusinessEntityID, AdventureWorks2017.Person.Person.FirstName, AdventureWorks2017.Person.Person.LastName "
    +" from AdventureWorks2017.Person.Person",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};
exports.getTopPeoresVendidos = function(req, resp){
    db.executeSQL("select DISTINCT TOP 6 "
    +" AdventureWorks2017.Production.Product.ProductID, "
    +" AdventureWorks2017.Production.Product.Name ProductName, "
    +" AdventureWorks2017.Production.Product.ProductNumber ProductNumber, "
    +" (select AdventureWorks2017.dbo.Tacataca(Product.ProductID) ) as UnitPrice, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" (AdventureWorks2017.Production.ProductSubcategory.Name)SubCategory, "
    +" (AdventureWorks2017.Production.ProductCategory.Name)CategoryName, "
    +" (AdventureWorks2017.Production.ProductModel.Name)ProductModel "
    
    +" from AdventureWorks2017.Production.Product "
    +" inner join AdventureWorks2017.Sales.SalesOrderDetail "
    +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Sales.SalesOrderDetail.ProductID "
    +" inner join AdventureWorks2017.Production.ProductSubcategory "
    +" on AdventureWorks2017.Production.Product.ProductSubcategoryID = AdventureWorks2017.Production.ProductSubcategory.ProductSubcategoryID "
    +" inner join AdventureWorks2017.Production.ProductCategory "
    +" on AdventureWorks2017.Production.ProductSubcategory.ProductCategoryID = AdventureWorks2017.Production.ProductCategory.ProductCategoryID "
    +" inner join AdventureWorks2017.Production.ProductModel "
    +" on AdventureWorks2017.Production.Product.ProductModelID = AdventureWorks2017.Production.ProductModel.ProductModelID "  
    +" inner join AdventureWorks2017.Production.ProductInventory "
    +" on AdventureWorks2017.Production.Product.ProductID = AdventureWorks2017.Production.ProductInventory.ProductID "
    +" inner join AdventureWorks2017.Production.Location "
    +" on AdventureWorks2017.Production.ProductInventory.LocationID = AdventureWorks2017.Production.Location.LocationID "
    +" group by AdventureWorks2017.Production.Product.ProductID, AdventureWorks2017.Production.Product.Name, "
    +" AdventureWorks2017.Production.Product.ProductNumber, "
    +" UnitPrice, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" AdventureWorks2017.Production.ProductSubcategory.Name, "
    +" AdventureWorks2017.Production.ProductCategory.Name, "
    +" AdventureWorks2017.Production.ProductModel.Name "
    
    +" order by UnitPrice asc, "
    +" AdventureWorks2017.Production.Product.ProductID, AdventureWorks2017.Production.Product.Name, "
    +" AdventureWorks2017.Production.Product.ProductNumber, "
    +" AdventureWorks2017.Production.Product.Color, "
    +" AdventureWorks2017.Production.Product.ProductLine, "
    +" AdventureWorks2017.Production.Product.Style, "
    +" AdventureWorks2017.Production.Product.SellStartDate, "
    +" AdventureWorks2017.Production.Product.SellEndDate, "
    +" AdventureWorks2017.Production.Product.Size, "
    +" AdventureWorks2017.Production.ProductSubcategory.Name, "
    +" AdventureWorks2017.Production.ProductCategory.Name, "
    +" AdventureWorks2017.Production.ProductModel.Name",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};





