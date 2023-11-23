import { useNavigate } from "react-router-dom";
import ErrorIcon from "../assets/icons/ErrorIcon";
import { LoginContainer } from "./WelcomeStyles";
import { LoginButton } from "./LoginFormStyles";

export const AuthError = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <ErrorIcon />
      <p>Something went wrong, please login again</p>
      <LoginButton type="button" onClick={() => navigate("/")}>
        Back to Login
      </LoginButton>
    </LoginContainer>
  );
};
