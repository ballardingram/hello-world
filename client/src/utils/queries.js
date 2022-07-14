import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!){
    user(email: $email) {
      _id
      displayName
      email
      friends {_id, displayName}
      friendCount
      skills {
        skillName,
        expertiseLevel
      }
      projects {
        _id,
        title,
        description,
        content,
        skillsRequiredForHelp,
        helpRequired,
        createdAt
        createdBy {
          _id,
          displayName
        },
        colloborators {
          _id,
          displayName
        }
      }
      savedProjects {
        _id,
        title,
        description,
        content,
        skillsRequiredForHelp,
        helpRequired,
        createdAt
        createdBy {
          _id,
          displayName
        },
        colloborators {
          _id,
          displayName
        }
      }
      skills {
        skillName
      }
    }
  }
`;

export const QUERY_USER_WITH_TOKEN = gql`
  query userFromToken($idtoken: String!){
    userFromToken(idtoken: $idtoken) {
      token
      user {
        _id
        displayName
        email
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
query projects{
  projects{
    _id,
    title,
    description,
    content,
    skillsRequiredForHelp,
    helpRequired,
    createdAt
    createdBy {
      _id,
      displayName
    },
    colloborators {
      _id,
      displayName
    }
  }
}
`;

export const GET_PROJECT_OPPORTUNITIES = gql`
query skillProjects($skills : [String]!){
  skillProjects(skills : $skills){
    _id,
    title,
    description,
    content,
    skillsRequiredForHelp,
    helpRequired,
    createdAt
    createdBy {
      _id,
      displayName
    },
    colloborators {
      _id,
      displayName
    }
  }
}
`;