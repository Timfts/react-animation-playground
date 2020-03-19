import styled, { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight:300; 
  }
`;

export default BaseStyles;
