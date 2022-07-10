const {gql} = require('apollo-server-express');
const typeDefs = gql`
    type Skill {
      skillName : String,
      expertiseLevel : String
    }
    type SocialLink {
      socialProvider : String,
      sociaProviderUserName : String
    }
    type Project {
      title :String,
      description : String,
      content: String,
      createdBy : String,
      createdAt : String,
      hidden : Boolean,
      helpRequired : Boolean,
      skillsRequiredForHelp : [String],
      colloborators : [User]
    }
    type User {
        _id : ID,
        displayName: String,
        email: String,
        friends : [User],
        blockedUsers : [User]
        accountSource : String,
        frindCount : Int,
        skills : [Skill],
        socialLinks : [SocialLink],
        profilePicURL : String,
        aboutMe : String,
        userCreatedAt : Int,
        verified : Boolean,
        SavedProjects : [Project],
        projects : [Project]
    }
    type Auth{
        token: ID!
        user: User
    }
    type Query {
        users : [User]
        user(email: String!) : User
      }
      type Mutation {
        login(email: String!, password: String!): Auth
        addLocalUser(displayName: String!, email: String!, password: String!): Auth
        addFriend(friendId: ID!): User
        addFBUser(displayName: String!, email: String!): Auth
        addGoogleUser(displayName: String!, email: String! ): Auth
        addGitHubUser(displayName: String!, email: String! ): Auth
        addLinkedInUser(displayName: String!, email: String!): Auth
        addProject(title: String, description: String, content : String, createdBy: ID, skillsRequired :[String], colloborators: [ID], helpRequired : Boolean  ) : Project
      }
`;

module.exports = typeDefs;