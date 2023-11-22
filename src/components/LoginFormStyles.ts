import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.spacing.large};
  max-width: 400px;
  width: 100%;
`;

export const Input = styled.input`
  padding: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const ValidationErrorText = styled.p`
  color: red;
  font-size: ${(props) => props.theme.font.fontSize.small};
  text-align: left;
  margin: 0;
`;

export const LoginButton = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
