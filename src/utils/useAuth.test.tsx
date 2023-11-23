import {
  render,
  fireEvent,
  waitFor,
  screen,
  renderHook,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { LOGIN_MUTATION } from "../graphql/loginMutation";
import { AuthProvider, useAuth } from "./useAuth";
import LoginForm from "../components/LoginForm";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const mocks = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        input: { email: "test@example.com", password: "password123" },
      },
    },
    result: {
      data: {
        Auth: {
          loginJwt: {
            jwtTokens: {
              accessToken: "mockedAccessToken",
            },
          },
        },
      },
    },
  },
];

describe("AuthProvider", () => {
  it("renders children and provides context values", () => {
    render(
      <MockedProvider mocks={mocks}>
        <AuthProvider>
          <div>Child Component</div>
        </AuthProvider>
      </MockedProvider>
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});

describe("useAuth", () => {
  it("provides Auth context values", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks}>
          <AuthProvider>{children}</AuthProvider>
        </MockedProvider>
      ),
    });

    expect(result.current.user).toBeDefined();
    expect(result.current.handleLogin).toBeInstanceOf(Function);
    expect(result.current.handleLogout).toBeInstanceOf(Function);
  });
});

describe("LoginForm", () => {
  it("handles login successfully", async () => {
    render(
      <MemoryRouter>
        <MockedProvider mocks={mocks}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <LoginForm />
            </AuthProvider>
          </ThemeProvider>
        </MockedProvider>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByTestId("emailInput"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("passwordInput"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByTestId("loginButton"));

    await waitFor(() => {
      expect(localStorage.getItem("token")).toEqual("mockedAccessToken");
    });
  });
});
