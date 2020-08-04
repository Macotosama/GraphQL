const { GraphQLScalarType } = require ('graphql')
const { GraphQLServer } = require('graphql-yoga')
const  fetch  = require('node-fetch')

const baseURL = `http://localhost:8000/`
const baseURL2 = `http://localhost:8000/Persons`

const typeDefs =
` type Query {
    persons: [Person]
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
        }
    },
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
  });
  
server.start(() => console.log(`Server is running on http://localhost:4000...`));