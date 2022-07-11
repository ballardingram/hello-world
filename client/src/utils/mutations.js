import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        displayName
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
  mutation updateUserProfile($displayName: String!, $email: String!, $password: String!) {
    updateUserProfile(_set: {displayName: $displayName, email: $email, password: $password}) {
      displayName
      email
    }
  }
`


// export const ADD_FB_USER = gql`
//   mutation addFBUser(displayName: String!, email: String!) {
//     addFBUser(displayName: $displayName, email: $email) {
//       token
//       user {
//         _id
//         displayName
//       }
//     }
//   }
// `;


// export const ADD_GOOGLE_USER = gql`
//   mutation addGoogleUser(displayName: String!, email: String!) {
//     addGoogleUser(displayName: $displayName, email: $email) {
//       token
//       user {
//         _id
//         displayName
//       }
//     }
//   }
// `;


// export const ADD_GITHUB_USER = gql`
//   mutation addGitHubUser(displayName: String!, email: String!) {
//     addGitHubUser(displayName: $displayName, email: $email) {
//       token
//       user {
//         _id
//         displayName
//       }
//     }
//   }
// `;


// export const ADD_LINKEDIN_USER = gql`
//   mutation addLinkedInUser(displayName: String!, email: String!) {
//     addLinkedInUser(displayName: $displayName, email: $email) {
//       token
//       user {
//         _id
//         displayName
//       }
//     }
//   }
// `;