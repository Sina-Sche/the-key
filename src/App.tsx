import { ThemeProvider } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import OverviewPage from "./pages/OverviewPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/overview" element={<OverviewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
