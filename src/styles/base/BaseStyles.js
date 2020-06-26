import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing:inherit;
    margin:0;
    padding:0;
  }

  html {
    box-sizing:border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight:300; 
    overscroll-behavior-y: contain;
  }

  a {
    text-decoration: none;
  }
`;

export default BaseStyles;
