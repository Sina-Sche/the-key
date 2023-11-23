import { useNavigate } from "react-router-dom";
import ErrorIcon from "../assets/icons/ErrorIcon";
import { LoginContainer } from "./WelcomeStyles";
import { LoginButton } from "./LoginFormStyles";
import styled from "styled-components";

const Container = styled(LoginContainer)`
  color: black;
`;
export const AuthError = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ErrorIcon />
      <p>Something went wrong, please login again</p>
      <LoginButton type="button" onClick={() => navigate("/")}>
        Back to Login
      </LoginButton>
    </Container>
  );
};
