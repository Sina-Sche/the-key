import { useMutation } from "@apollo/client";
import { createContext, useCallback, useContext, useState } from "react";
import {
  LOGIN_MUTATION,
  LoginJwtMutationResponse,
} from "../graphql/loginMutation";

interface AuthContextProps {
  user: {
    email: string;
    token: string;
  };
  handleLogin: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;
  handleLogout: () => void;
  loginSuccessful: Boolean;
  emailError: string;
  passwordError: string;
  loginError: string;
  loading: Boolean;
}
const AuthContext = createContext<AuthContextProps>({
  user: { email: "", token: "" },
  handleLogin: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {},
  handleLogout: () => {},
  loginSuccessful: false,
  emailError: "",
  passwordError: "",
  loginError: "",
  loading: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>();
  const [loginSuccessful, setLoginSuccessful] = useState<Boolean>(false);
  const [loginMutation, { loading }] =
    useMutation<LoginJwtMutationResponse>(LOGIN_MUTATION);

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
        setLoginError("Something went wrong. Please try again.");
    }
  };

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
      | React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
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
        setLoginSuccessful(true);
      } else {
        setError("Login", "Something went wrong. Please try again.");
      }
    } catch (userLoginError) {
      setError("Login", "Incorrect Email or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoginSuccessful(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        loginSuccessful,
        emailError,
        passwordError,
        loginError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
