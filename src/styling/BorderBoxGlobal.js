import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


  /* Prevent horizontal scroll */
  html, body {
    overflow-x: hidden !important;
    
    max-width: 100% !important;
  }
`;

export default GlobalStyles;
