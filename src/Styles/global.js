import { createGlobalStyle } from "styled-components";
import img from "../assets/login01.jpg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
  background: url(${img}) no-repeat;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
}

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;
