import React from "react";
import { Route, Redirect } from "react-router-dom";

import login from "../Login/index";

export default function App({ ...props }) {
  return (
    <div>
      <Route exact path="/login" component={login} />
    </div>
  );
}
