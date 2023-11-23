import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`;

export const Img = styled.img`
  max-width: 90%;
`;

export const Headline = styled.h2`
  margin-top: ${(props) => props.theme.spacing.large};
`;
