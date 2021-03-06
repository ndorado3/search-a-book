const { gql } = require("apollo-server-express");

//to define typeDefs we put them in back teeks ` `
//type class: is how I want the data to be represent. With the properities
// & type of query
// type Book the name is coming from the Model Class
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input InputBooks{
    bookId: String!
    title: String!
    description: String!
    image: String
    link: String
    authors: [String]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String, email: String!, password: String!): Auth
    saveBook(dataB: InputBooks!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
