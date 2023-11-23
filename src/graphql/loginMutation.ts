import { gql } from "@apollo/client";

interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginJwtMutationResponse {
  Auth: {
    loginJwt: {
      jwtTokens: JwtTokens;
    };
  };
}
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
