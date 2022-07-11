import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query {
    user(email: "test@test.com") {
      _id
      fullname
      email
      friendCount
      friends {
        _id
        fullname
      }
    }
  }
`;


export const QUERY_ME = gql`
  {
    me {
      _id
      displayName
      email
      friendCount
      friends {
        _id
        displayName
      }
      blockedUsers {
        _id
        displayName
      }
      accountSource
    }
  }
`