import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

describe("LoginForm", () => {
  it("Should render the InputFields", () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <MockedProvider>
            <LoginForm />
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
