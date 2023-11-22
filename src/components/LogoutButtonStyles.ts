import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: ${(props) => props.theme.spacing.large}

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverAccent};
  }
`;
