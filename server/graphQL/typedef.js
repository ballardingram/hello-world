const {gql} = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id : ID,
        fullname: String,
        email: String,
        friends : [User],
        accountSource : String,
        friendCount : Int
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users : [User]
        user(username: String!) : User
      }
      type Mutation {
        login(email: String!, password: String!): User
        addLocalUser(fullname: String!, email: String!, password: String!): Auth
        addFriend(friendId: ID!): User
        addFBUser(fullname: String!, email: String!): Auth
        addGoogleUser(fullname: String!, email: String! ): Auth
        addGitHubUser(fullname: String!, email: String! ): Auth
        addLinkedInUser(fullname: String!, email: String!): Auth
      }
`;

module.exports = typeDefs;