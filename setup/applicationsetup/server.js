import express from "express";
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
const hostname = '127.0.0.1';
const port = 3000;


app.listen(port, () => {
  console.log(`now browse to http://${hostname}:${port}/graphql`)
})