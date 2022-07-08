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