import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

describe("Welcome component renders correctly", () => {
  test("renders WelcomeComponent", () => {
    render(
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    );
    const welcomeComponent = screen.getByTestId("welcome");
    expect(welcomeComponent).toBeInTheDocument();
  });
  test("displays text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    );
    const text = screen.getByText(/Please login/);
    expect(text).toBeInTheDocument();
  });
  test("displays Icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});
