import React from "react";
import { render, screen } from "@testing-library/react";
import ValidationError from "./ValidationError";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

describe("ValidationError", () => {
  it("renders error message correctly", () => {
    const error = "This is an error message.";
    const type = "email";

    render(
      <ThemeProvider theme={theme}>
        <ValidationError error={error} type={type} />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText(error);

    expect(errorMessage).toBeInTheDocument();
  });

  it("associates the error message with the input field using htmlFor", () => {
    const error = "This is an error message.";
    const type = "password";

    render(
      <ThemeProvider theme={theme}>
        <input id={type} type="password" />
        <label htmlFor={type}>Password</label>
        <ValidationError error={error} type={type} />
      </ThemeProvider>
    );

    const errorMessage = screen.getByLabelText(error);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("id", type);
  });
});
