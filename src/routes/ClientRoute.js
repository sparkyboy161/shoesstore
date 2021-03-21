import React from "react";
import { Route } from "react-router-dom";

import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import Home from "../views/client/Home";

export default function ClientRoute() {

  return (
    <>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </>
  );
}
