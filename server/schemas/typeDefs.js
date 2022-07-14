const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Checkout {
    session: ID
}

type Query {
    user: User
    checkout(products: [ID]!): Checkout
  }

`;

module.exports = typeDefs;