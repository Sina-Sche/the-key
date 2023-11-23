import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, ul, li {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: ${(props) => props.theme.font.fontSize.standard};
    color: ${(props) => props.theme.colors.text};
    background-image: ${(props) => props.theme.gradient};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
