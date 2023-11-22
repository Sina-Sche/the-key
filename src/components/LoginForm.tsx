import { useMutation } from "@apollo/client";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_MUTATION,
  LoginJwtMutationResponse,
} from "../graphql/loginMutation";
import {
  FormContainer,
  Input,
  LoginButton,
  ValidationErrorText,
} from "./LoginFormStyles";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>();
  const [loginMutation, { loading }] =
    useMutation<LoginJwtMutationResponse>(LOGIN_MUTATION);
  const [loginError, setLoginError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<Boolean>();
  const navigate = useNavigate();

  const setError = (field: string, message: string) => {
    switch (field) {
      case "email":
        setEmailError(message);
        break;
      case "password":
        setPasswordError(message);
        break;
      case "login":
        setLoginError(message);
        break;
      default:
        // Handle unexpected errors
        setLoginError("Something went wrong. Please try again.");
    }
  };

  // const debouncedEmail = useDebounce(email, 200);
  // const debouncedPassword = useDebounce(password, 200);

  const checkEmailValidity = useCallback(() => {
    if (email === "") {
      setError("email", "Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Please enter a valid email.");
      return;
    }
    setError("email", "");
  }, [email]);

  const checkPasswordValidity = useCallback(() => {
    if (password === "") {
      setError("password", "Please enter a password");
      return;
    }
    if (password.length < 8) {
      setError("password", "Your password should have at least 8 characters.");
      return;
    }
    setError("password", "");
  }, [password]);

  const handleLogin = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    checkEmailValidity();
    checkPasswordValidity();
    try {
      const { data: userData } = await loginMutation({
        variables: { input: { email, password } },
      });
      const token = userData?.Auth.loginJwt.jwtTokens.accessToken;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/overview");
      } else {
        setError("Login", "Something went wrong. Please try again.");
      }
    } catch (userLoginError) {
      setError("Login", "Incorrect Email or password.");
    }
  };
  return (
    <FormContainer>
      <form onSubmit={(e) => handleLogin(e)} noValidate>
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
