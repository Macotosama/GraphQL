var express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
var { graphqlHTTP } = require('express-graphql');
const { GraphQLScalarType } = require ('graphql')
const { GraphQLServer } = require('graphql-yoga')
const  fetch  = require('node-fetch')

const baseURL = `http://localhost:8000/`
const baseURL2 = `http://localhost:8000/`
const baseURL3 = `http://localhost:8000/AllProcutLocation/`
const baseURL4 = `http://localhost:8000/InforVendedorEnRecursosHumanos/`
const baseURL5 = `http://localhost:8000/getProcDistribuidores/` 
const baseURL6 = `http://localhost:8000/getProcPersosnCustomer/`
const baseURL7 = `http://localhost:8000/getProcVendedores/`
const baseURL8 = `http://localhost:8000/getprocInsertarEnAuditoria/`
const baseURL9 = `http://localhost:8000/getProcNoBorrar/`
const baseURL10 = `http://localhost:8000/getProcInfrmacionBasicaProduct/`
const baseURL11 = `http://localhost:8000/getProcInfomacionBasicaSalesOrderDetail/`
const baseURL12 = `http://localhost:8000/getProcInformacionBasicaPersonCreditCard/`
const baseURL13 = `http://localhost:8000/getProcInformacionBasicaSalesPerson/`
const baseURL14 = `http://localhost:8000/getProcInformacionBasicaCustomers/`
const baseURL15 = `http://localhost:8000/getProcInformacionBasicaVendor/`
const baseURL16 = `http://localhost:8000/getProcInformacionBasicaVendor2/`
const typeDefs =
` type Query {
    persons: [Person]
    productos: [Producto]
    ventas: [Venta]
    vendedores: [vendedor]
    proveedores: [Proveedor]
    topProductosMejoresVendidos: [topProducto]
    topProductosPeorVendidos: [topProducto]
    locaciones: [Locacion]
    optenerlocaciones(LocationName: String): [Optenerlocacion]
    optenerInformacionTemporalRecusosHumanosPersonas(IdentificadorVendedor: Int): [optenerInformacionTemporalRecusosHumanosPersona]
    optenerProcCreditCards: [optenerProcCreditCard]
    optenerProcTerritorys: [optenerProcTerritory]
    optenerProcShoppingCartItems: [optenerProcShoppingCartItem]
    optenerProcSalesTaxRates: [optenerProcSalesTaxRate]
    optenerProcDistribuidores(Product: String, Distribuidor: String, BusinessEntityID: Int): [Proveedor] 
    optenerProcVendedores(FullName: String): [vendedor]
    optenerProcPersosnCustomer(PersonID: Int ,MiddleName: String ,FirstName: String, LastName: String): [Person]
    peoples: [People]
    mensajes(Identificador: Int): [Mensaje]
    noborrados(Identificador: Int): [Mensaje]
    auditorias: [auditoria]
    basicProducts(Identificador: Int): [BasicProduct]
    basicaSalesOrderDetails(SalesOrderID: Int): [basicaSalesOrderDetail]
    basicaPersonCreditCards(CreditCardID: Int): [basicaPersonCreditCard]
    basicaSalesPersons(BusinessEntityID: Int): [basicaSalesPerson]
    basicaCustomers(BusinessEntityID: Int): [basicaCustomer]
    basicaVendors(Name: String): [basicaVendor]
    basicaVendors2(BusinessEntityID: Int): [basicaVendor]
} 
type basicaVendor {
    BusinessEntityID: Int
    AccountNumber: String
    Name: String
    CreditRating: Int
    PreferredVendorStatus: Int
    ActiveFlag: Int
    PurchasingWebServiceURL: String
    ModifiedDate: String
}
type basicaCustomer {
    CustomerID: Int
    PersonID: Int
    StoreID: Int
    AccountNumber: String
    rowguid: String
    ModifiedDate: String
}

type basicaSalesPerson {
    BusinessEntityID: Int
    TerritoryID: Int
    SalesQuota: Float
    Bonus: Float
    CommissionPct: Float
    SalesYTD: Float
    SalesLastYear: Float
    rowguid: String
    ModifiedDate: String
}

type basicaPersonCreditCard {
    BusinessEntityID: Int
    CreditCardID: Int
    ModifiedDate: String
}

type basicaSalesOrderDetail {
    SalesOrderID: Int
    SalesOrderDetailID: Int
    CarrierTrackingNumber: String
    OrderQty: Int
    ProductID: String
    SpecialOfferID: Int
    UnitPrice: Float
    UnitPriceDiscount: Float
    LineTotal: Float
    rowguid: String
    ModifiedDate: String
}
type BasicProduct {
    ProductID: Int
    Name: String
    ProductNumber: String
    Color: String
    SafetyStockLevel: Int
    ReorderPoint: Int
    StandardCost: Float
    ListPrice: Float
    Size: String
    SizeUnitMEasureCode: String
    WeightUnitMEasureCode: String
    Weight: Float
    DaysToManufacture: Int
    ProductLine: String
    Class: String
    Style: String
    ProductSubcategoryID: Int
    ProductModelID: Int
    SellStartDate: String
    SellEndDate: String
    DiscontinuedDate: String
    rowguid: String
    ModifiedDate: String

}

type auditoria {
    idAuditoria: Int
    Tabla: String
    Accion: String
    Fecha: String
    Mensaje: String
}
type Mensaje{
    info: String
}
type People {
    BusinessEntityID: Int
    FirstName: String
    LastName: String
}                       

type optenerProcSalesTaxRate {
    SalesTaxRateID: Int
    StateProvinceID: Int
    TaxType: Int
    rowguid: Int
    ModifiedDate: String
}

type optenerProcShoppingCartItem {
    ShoppingCartItemID: Int
    ShoppingCartID: String
    ProductID: Int
    DateCreated: String
    ModifiedDate: String
}
type optenerProcTerritory {
    TerritoryID: Int
    Name: String
    CountryRegionCode: String
    SalesYTD: Float
    SalesLastYear: Float
    CostYTD: Float
    CostLastYear: Float
    rowguid: Int
    ModifiedDate: String
}
type optenerProcCreditCard {
    CreditCardID: Int
    CardNumber: String
    CardType: String
    ExpMonth: Int
    ExpMonthExpYear: Int
    ModifiedDate: String
}
type optenerInformacionTemporalRecusosHumanosPersona {
    DeparmentiD: Int
    jobTitle: String
    BusinessEntityID: Int
    Nombre: String
    SegundoNombre: String
    Apellido: String
    startTimeShift: String
    endTimeShift: String
}

type Optenerlocacion {
    ProductID: Int
    Name: String
    Quantity: Int
}
type Locacion { 
    LocationName: String
}

type topProducto {
    ProductID: Int
    ProductName: String
    ProductNumber: String
    UnitPrice: Float
    Color: String
    ProductLine: String
    Style: String
    SellStartDate:String
    SellEndDate: String
    Size: String
    SubCategory: String
    CategoryName: String
    ProductModel: String
}

type Proveedor {
    BusinessEntityID: Int
    Name: String
    PurchasingWebServiceURL: String
    
    MaxOrderQty: Int
    MinOrderQty: Int
    StandardPrice: Float
    Product: String
    ProductCategory: String
    StandardCost: Float
    OrderQty: Int
    RejectedQty: Float
    ReceivedQty: Float
    StockedQty: Float
    SubTotal: Float    
}

type vendedor {
    BusinessEntityID: Int
    FullName: String
    SalesQuota: Float
    JobCandidateID: Int
    Gender: String
    VacationHours: Int
    OrganizationLevel: Int
    SickLeaveHours: String
    PayFrequency: Int
    Rate: Float
    CommissionPct: Float
    SalesLastYear: Float
    DepartmentName: String
    GroupName: String
}

type Venta {
    SalesOrderID: Int
    ProductID: Int
    RevisionNumber: Int
    Description: String
    UnitPrice: Float
    CustomerID: Int
    FullNameCustomer: String
    FullNameSalesPerson: String
    Bonus: Float
    SalesLastYear: Float
    CommissionPct: Float
}

type Producto {
    ProductID: Int
    ProductName: String 
    ProductNumber: String 
    UnitPrice: Float
    Color: String
    ProductLine: String
    Style: String
    SellStartDate: String
    SellEndDate: String
    Size: String
    SubCategory: String
    CategoryName: String
    ProductModel: String
    Quantity: Int
    LocationName: String
}

type Person {
    BusinessEntityID: Int
    PersonType: String
    NameStyle: Int
    Title: String
    FirstName: String
    MiddleName: String
    LastName: String
    Suffix: String
    EmailPromotion: Int
    AdditionalContactInfo: String
    Demagraphics: String
    rowguid: String
    ModifiedData: String
  }
`;
const resolvers = {
    Query: {
        persons: async() =>{

            const response = await fetch(`${baseURL}Persons`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        auditorias:async() =>{

            const response = await fetch(`${baseURL}tablaAuditoria`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        productos:async() =>{

            const response = await fetch(`${baseURL}Products`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        ventas:async() =>{

            const response = await fetch(`${baseURL}Sells`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        vendedores :async() =>{

            const response = await fetch(`${baseURL}Sellers`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        proveedores :async() =>{

            const response = await fetch(`${baseURL}Proveedors`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        topProductosMejoresVendidos:async() =>{

            const response = await fetch(`${baseURL}topProductos`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        topProductosPeorVendidos:async() =>{

            const response = await fetch(`${baseURL}topPeoresProductos`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },

        locaciones:async() =>{

            const response = await fetch(`${baseURL}Locations`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        
        optenerlocaciones:async(_, args) =>{
           // const { Location } = args
            //return console.log(`${baseURL3}${args}`)
            const response = await fetch(encodeURI(`${baseURL3}${args.LocationName}`));
            return response.json();            
            
        },
        optenerInformacionTemporalRecusosHumanosPersonas:async(_, args) =>{
             const response = await fetch(encodeURI(`${baseURL4}${args.IdentificadorVendedor}`));
             return response.json();            
             
         },
         optenerProcDistribuidores:async(_, args) =>{
            const response = await fetch(encodeURI(`${baseURL5}${args.IdentificadorVendedor,args.Distribuidor,args.BusinessEntityID}`));
            return response.json();            
            
        },
        mensajes:async(_, args) =>{
            const response = await fetch(encodeURI(`${baseURL8}${args.Identificador}`));
            return response.json();            
            
        },
        optenerProcPersosnCustomer:async(_, args) =>{
            const response = await fetch(encodeURI(`${baseURL6}${args.PersonID,args.MiddleName,args.FirstName,args.LastName}`));
            return response.json();            
            
        },
         optenerProcCreditCards:async() =>{

            const response = await fetch(`${baseURL}procCreditCard`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        optenerProcTerritorys:async() =>{

            const response = await fetch(`${baseURL}procTerritory`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        optenerProcShoppingCartItems:async() =>{

            const response = await fetch(`${baseURL}procShoppingCartItem`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        optenerProcSalesTaxRates:async() =>{

            const response = await fetch(`${baseURL}procSalesTaxRate`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        peoples:async() =>{

            const response = await fetch(`${baseURL}getAllPeople`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        optenerProcVendedores:async(_, args) =>{

            const response = await fetch(`${baseURL7}${args.FullName}`);
            return response.json();            
            return fetch(baseURL2).then(res=>res.json())
        },
        noborrados:async(_, args) =>{

            const response = await fetch(`${baseURL9}${args.Identificador}`);
            return response.json();            
            
        },
        basicProducts:async(_, args) =>{

            const response = await fetch(`${baseURL10}${args.Identificador}`);
            return response.json();            
            
        },
        basicaSalesOrderDetails:async(_, args) =>{

            const response = await fetch(`${baseURL11}${args.SalesOrderID}`);
            return response.json();            
            
        },
        basicaPersonCreditCards:async(_, args) =>{

            const response = await fetch(`${baseURL12}${args.CreditCardID}`);
            return response.json();            
            
        },
        basicaSalesPersons:async(_, args) =>{

            const response = await fetch(`${baseURL13}${args.BusinessEntityID}`);
            return response.json();            
            
        },
        basicaCustomers:async(_, args) =>{

            const response = await fetch(`${baseURL14}${args.BusinessEntityID}`);
            return response.json();            
            
        },
        basicaVendors:async(_, args) =>{

            const response = await fetch(`${baseURL15}${args.Name}`);
            return response.json();            
            
        },
        basicaVendors2:async(_, args) =>{

            const response = await fetch(`${baseURL16}${args.BusinessEntityID}`);
            return response.json();            
            
        }

    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
  });
  

//Seccion de solicitudes del servidor 
//server.use('/localhost:4000',baseURL2({}))
//

server.start(() => console.log(`Server is running on http://localhost:4000...`));


// var app = express(); http://localhost:4000/persons

// app.use(bodyParser.json())

// app.use(cors())


// app.use('/graphql', graphqlHTTP({
//   schema: typeDefs,
//   rootValue: resolvers.persons,
//   graphiql: true,
// }));
// app.listen(4000);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');