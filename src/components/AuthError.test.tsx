import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { AuthError } from "./AuthError";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("AuthError", () => {
  it("renders error message and navigation button", () => {
    render(
      <ThemeProvider theme={theme}>
        <AuthError />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText(
      "Something went wrong, please login again"
    );
    const backButton = screen.getByRole("button", { name: "Back to Login" });

    expect(errorMessage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it("navigates back to login on button click", () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigateMock);

    render(
      <ThemeProvider theme={theme}>
        <AuthError />
      </ThemeProvider>
    );

    const backButton = screen.getByRole("button", { name: "Back to Login" });
    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
