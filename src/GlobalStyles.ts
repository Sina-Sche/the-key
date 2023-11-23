import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: ${(props) => props.theme.font.fontSize.standard};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
