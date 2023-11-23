import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverAccent};
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.medium}) {
    display: none;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: none;
  }
`;
