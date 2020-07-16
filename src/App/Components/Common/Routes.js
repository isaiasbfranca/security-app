import React from "react";
import { Route } from "react-router-dom";

import login from "../Login/index";
import Home from "../Home/index";

export default function App({ ...props }) {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={login} />
    </div>
  );
}
