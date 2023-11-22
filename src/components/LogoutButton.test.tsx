import { render, screen } from "@testing-library/react";
import OverviewPage from "../pages/OverviewPage";
import { BrowserRouter } from "react-router-dom";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

test("renders LogoutButton", () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <OverviewPage />
      </ThemeProvider>
    </BrowserRouter>
  );
  const logoutButton = screen.getByTestId("logoutButton");
  expect(logoutButton).toBeInTheDocument();
});
