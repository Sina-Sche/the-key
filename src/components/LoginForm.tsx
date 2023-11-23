import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Input, LoginButton } from "./LoginFormStyles";
import { useAuth } from "../utils/useAuth";
import ValidationError from "./ValidationError";
import InputField from "./InputField";

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
  useEffect(() => {
    if (loginSuccessful) navigate("/overview");
  }, [loginSuccessful, navigate]);
  // const debouncedEmail = useDebounce(email, 200);
  // const debouncedPassword = useDebounce(password, 200);

  return (
    <FormContainer>
      <form onSubmit={(e) => handleLogin(e, email, password)} noValidate>
        <InputField
          id={"email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email"
          testId="emailInput"
          error={emailError}
        />
        <br />
        <InputField
          id={"password"}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          testId="passwordInput"
          error={passwordError}
        />
        <br />
        {loading && <p>Loading...</p>}
        <LoginButton type="submit" id="login">
          Login
        </LoginButton>
        {loginError ? (
          <ValidationError error={loginError} type={"login"} />
        ) : null}
      </form>
    </FormContainer>
  );
};
export default LoginForm;
