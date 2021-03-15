import React from "react";
import { Route } from "react-router-dom";

import AddShoes from "../views/admin/AddShoes";
import Config from "../views/admin/Config";
import Formula from "../views/admin/Formula";
import Home from "../views/admin/Home";
import Shoes from "../views/admin/Shoes";

export default function AdminRoute() {
  return (
    <>
      <Route path="/admin/shoes" exact>
        <Shoes />
      </Route>
      <Route path="/admin/shoes/add">
        <AddShoes />
      </Route>
      <Route path="/admin/config">
        <Config />
      </Route>
      <Route path="/admin/formula">
        <Formula />
      </Route>
      <Route path="/admin" exact>
        <Home />
      </Route>
    </>
  );
}
