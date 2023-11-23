import { render, screen } from "@testing-library/react";
import OverviewPage from "../pages/OverviewPage";
import { MemoryRouter } from "react-router-dom";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import { MockedProvider } from "@apollo/client/testing";

test("renders LogoutButton", () => {
  render(
    <MemoryRouter>
      <MockedProvider addTypename={false}>
        <ThemeProvider theme={theme}>
          <OverviewPage />
        </ThemeProvider>
      </MockedProvider>
    </MemoryRouter>
  );
  const logoutButton = screen.getByTestId("logoutButton");
  expect(logoutButton).toBeInTheDocument();
});
