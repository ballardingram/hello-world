import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!){
    user(email: $email) {
      _id
      displayName
      email
      friendCount
      friends {
        _id
        displayName
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


// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       displayName
//       email
//       friendCount
//       friends {
//         _id
//         displayName
//       }
//       blockedUsers {
//         _id
//         displayName
//       }
//       accountSource
//     }
//   }
// `