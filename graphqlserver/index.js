var express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
var { graphqlHTTP } = require('express-graphql');
const { GraphQLScalarType } = require ('graphql')
const { GraphQLServer } = require('graphql-yoga')
const  fetch  = require('node-fetch')

const baseURL = `http://localhost:8000/`
const baseURL2 = `http://localhost:8000/Persons`

const typeDefs =
` type Query {
    persons: [Person]
    productos: [Producto]
    ventas: [Venta]
    vendedores: [vendedor]
    proveedores: [Proveedor]
    topProductosMejoresVendidos: [topProducto]
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