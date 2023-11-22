import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Mutation($input: LoginJwtInput!) {
    Auth {
      loginJwt(input: $input) {
        jwtTokens {
          accessToken
          refreshToken
        }
      }
    }
  }
`;
