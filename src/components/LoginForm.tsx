import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Input,
  LoginButton,
  ValidationErrorText,
} from "./LoginFormStyles";
import { useAuth } from "../utils/useAuth";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {
    handleLogin,
    emailError,
    passwordError,
    loginError,
    loading,
    loginSuccessful,
  } = useAuth();

  const navigate = useNavigate();
  if (loginSuccessful) navigate("/overview");
  // const debouncedEmail = useDebounce(email, 200);
  // const debouncedPassword = useDebounce(password, 200);

  return (
    <FormContainer>
      <form onSubmit={(e) => handleLogin(e, email, password)} noValidate>
        <div>
          <Input
            id={"email"}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter your email"
          />
          <label htmlFor={"email"}>
            {" "}
            {emailError !== undefined ? (
              <ValidationErrorText>{emailError}</ValidationErrorText>
            ) : null}
          </label>
        </div>
        <br />
        <Input
          id={"password"}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          placeholder="Enter your password"
        />
        <label htmlFor={"password"}>
          {" "}
          {passwordError ? (
            <ValidationErrorText>{passwordError}</ValidationErrorText>
          ) : null}
        </label>
        <br />
        {loading && <p>Loading...</p>}
        <LoginButton type="submit">Login</LoginButton>
        {loginError ? (
          <ValidationErrorText>{loginError}</ValidationErrorText>
        ) : null}
      </form>
    </FormContainer>
  );
};
export default LoginForm;
