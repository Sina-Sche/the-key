import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

test("renders Login", () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  const login = screen.getByTestId("login");
  expect(login).toBeInTheDocument();
});
