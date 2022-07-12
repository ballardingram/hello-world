const {gql} = require('apollo-server-express');
const typeDefs = gql`
    type Skill {
      skillName : String,
      expertiseLevel : String
    }
    type SocialLink {
      socialProvidername : String,
      socialProviderUserName : String
    }
    type Project {
      _id : ID,
      title :String,
      description : String,
      content: String,
      createdBy : User,
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
      friendCount : Int,
      projects : [Project],
      savedProjects : [Project],
      aboutMe : String,
      userCreatedAt : String,
      skills : [Skill],
      socialLinks : [SocialLink],
      verified : Boolean,
      profilePicURL : String
  }
    

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users : [User]
        user(email: String!) : User
        userFromToken(idtoken: String!) : Auth
        project(projectID : ID!) : Project
        projects : [Project]
        skillProjects(skillName: String!) : [Project]
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
        updateUserProfile(displayName: String, email: String, password: String) : User
        updateProject(projectData : String): Project
      }
`;

module.exports = typeDefs;