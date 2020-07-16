import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../App/Components/Header/index";
import Routes from "../App/Components/Common/Routes";
import Footer from "../App/Components/Footer/index";

import { GlobalStyle } from "../Styles/global";

// compomentes ant
import "antd/dist/antd.css";

import "./styles.css";

export default function LayoutTemplate({ ...props }) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
