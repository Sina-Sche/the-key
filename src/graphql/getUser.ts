import { gql } from "@apollo/client";

export interface UserResponse {
  Viewer: {
    Auth: {
      currentUser: {
        user: {
          name: string;
        };
      };
    };
  };
}

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
  }
`;
