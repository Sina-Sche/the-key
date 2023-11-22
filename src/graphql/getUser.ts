import { gql } from '@apollo/client';

export const GET_USER = gql`
query Edges {
  Viewer {
    Auth {
      currentUser {
        user {
          name
        }
      }
    }
  }
}`

