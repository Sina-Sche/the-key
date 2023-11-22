import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Login", () => {
  render(<App />);
  const login = screen.getByTestId("login");
  expect(login).toBeInTheDocument();
});
