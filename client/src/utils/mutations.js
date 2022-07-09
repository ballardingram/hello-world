import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addLocalUser($fullname: String!, $email: String!, $password: String!) {
    addLocalUser(fullname: $fullname, email: $email, password: $password) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;


export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;


export const ADD_FB_USER = gql`
  mutation addFBUser(fullname: String!, email: String!) {
    addFBUser(fullname: $fullname, email: $email) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;


export const ADD_GOOGLE_USER = gql`
  mutation addGoogleUser(fullname: String!, email: String!) {
    addGoogleUser(fullname: $fullname, email: $email) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;


export const ADD_GITHUB_USER = gql`
  mutation addGitHubUser(fullname: String!, email: String!) {
    addGitHubUser(fullname: $fullname, email: $email) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;


export const ADD_LINKEDIN_USER = gql`
  mutation addLinkedInUser(fullname: String!, email: String!) {
    addLinkedInUser(fullname: $fullname, email: $email) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;