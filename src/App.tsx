import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <header data-testid="header">
          <p>Test App</p>
        </header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
