import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome component renders correctly", () => {
  test("renders WelcomeComponent", () => {
    render(<Welcome />);
    const welcomeComponent = screen.getByTestId("welcome");
    expect(welcomeComponent).toBeInTheDocument();
  });
  test("displays text", () => {
    render(<Welcome />);
    const text = screen.getByText(/Please login/);
    expect(text).toBeInTheDocument();
  });
  test("displays Icon", () => {
    render(<Welcome />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});
