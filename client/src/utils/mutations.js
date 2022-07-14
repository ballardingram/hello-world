import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        displayName
        email
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addLocalUser($displayName: String!, $email: String!, $password: String!) {
    addLocalUser(displayName: $displayName, email: $email, password: $password) {
      token
      user {
        _id
        displayName
        email
      }
    }
  }
`;


export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      displayName
      friendCount
      friends {
        _id
        displayName
      }
    }
  }
`;


export const UPDATE_USER = gql`
  mutation updateUserProfile($userData: String) {
    updateUserProfile(userData: $userData) {
      _id
      displayName
      email
      skills {
        skillName
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($title: String, $description: String, 
    $content : String, 
    $createdBy: ID,
     $skillsRequired :[String], $colloborators: [ID], $helpRequired : Boolean  ) {
    addProject(title: $title, description: $description, content: $content, createdBy: $createdBy, skillsRequired: $skillsRequired, colloborators: $colloborators, helpRequired: $helpRequired) {
      _id
      title
      description
      content
      createdBy{
        _id
        displayName
      }
      createdAt
      hidden
      helpRequired
      skillsRequiredForHelp
      colloborators {
        _id,
        displayName
      }
     
    }

  }
`
