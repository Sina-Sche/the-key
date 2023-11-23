import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { useAuth } from "../utils/useAuth";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { MockedProvider } from "@apollo/client/testing";

jest.mock("../utils/useAuth");

describe("LoginForm", () => {
  const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

  beforeEach(() => {
    mockUseAuth.mockReset();
  });

  it("renders login form correctly", () => {
    mockUseAuth.mockReturnValue({
      user: { email: "", token: "" },
      handleLogout: jest.fn(),
      handleLogin: jest.fn(),
      emailError: "",
      passwordError: "",
      loginError: "",
      loading: false,
      loginSuccessful: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <MockedProvider>
          <MemoryRouter>
            <LoginForm />
          </MemoryRouter>
        </MockedProvider>
      </ThemeProvider>
    );

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = screen.getByTestId("loginButton");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("handles input change correctly", () => {
    mockUseAuth.mockReturnValue({
      user: { email: "", token: "" },
      handleLogout: jest.fn(),
      handleLogin: jest.fn(),
      emailError: "",
      passwordError: "",
      loginError: "",
      loading: false,
      loginSuccessful: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </ThemeProvider>
    );
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("displays loading state while logging in", async () => {
    mockUseAuth.mockReturnValue({
      handleLogin: jest.fn().mockResolvedValue({}),
      handleLogout: jest.fn(),
      user: { email: "", token: "" },
      emailError: "",
      passwordError: "",
      loginError: "",
      loading: true,
      loginSuccessful: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </ThemeProvider>
    );
    const loginButton = screen.getByText("Login");

    userEvent.click(loginButton);

    expect(screen.getByTestId("loadingOverlay")).toBeInTheDocument();
  });

  it("displays login error when login fails", async () => {
    mockUseAuth.mockReturnValue({
      handleLogin: jest.fn().mockRejectedValue(new Error("Login failed")),
      handleLogout: jest.fn(),
      user: { email: "", token: "" },
      emailError: "",
      passwordError: "",
      loginError: "Login failed",
      loading: false,
      loginSuccessful: false,
    });

    render(
      <ThemeProvider theme={theme}>
        <MockedProvider>
          <MemoryRouter>
            <LoginForm />
          </MemoryRouter>
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Login failed")).toBeInTheDocument();
    });
  });
});
