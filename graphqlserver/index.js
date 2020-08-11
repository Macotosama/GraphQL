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
    optenerProcVendedores(FirstName: String, LastName: String, Gender: String, BusinessEntityID: String): [vendedor]
    optenerProcPersosnCustomer(PersonID: Int ,ProductName: String ,FirstName: String, LastName: String,): [Person]
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
    AccountNumber: Int
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
            const response = await fetch(encodeURI(`${baseURL5}${args.IdentificadorVendedor,arg.Distribuidor,arg.BusinessEntityID}`));
            return response.json();            
            
        }
         ,
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