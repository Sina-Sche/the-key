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
  const [loginMutation] = useMutation<LoginJwtMutationResponse>(LOGIN_MUTATION);
  const [loginError, setLoginError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<Boolean>();
  const navigate = useNavigate();

  // const debouncedEmail = useDebounce(email, 200);
  // const debouncedPassword = useDebounce(password, 200);

  const checkEmailValidity = useCallback(() => {
    if (email === "") {
      setEmailError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailError("");
  }, [email]);

  const checkPasswordValidity = useCallback(() => {
    if (password === "") {
      setPasswordError("Please enter a password");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Your password should have at least 8 characters.");
      return;
    }
    setPasswordError("");
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
      token && localStorage.setItem("token", token);
      navigate("/overview");
    } catch (userLoginError) {
      setLoginError("Incorrect Email or password");
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
        <LoginButton type="submit">Login</LoginButton>
        {loginError ? (
          <ValidationErrorText>{loginError}</ValidationErrorText>
        ) : null}
      </form>
    </FormContainer>
  );
};
export default LoginForm;
