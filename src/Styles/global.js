import { createGlobalStyle } from "styled-components";
import img from "../assets/login01.jpg";

export const GlobalStyle = createGlobalStyle`
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
`;
