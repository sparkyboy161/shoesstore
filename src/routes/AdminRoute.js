import React from "react";
import { Route } from "react-router-dom";

import AddShoes from "../views/admin/AddShoes";
import Config from "../views/admin/Config";
import Formula from "../views/admin/Formula";
import Shoes from "../views/admin/Shoes";

export default function AdminRoute() {
  return (
    <>
      <Route path="/admin/shoes" exact>
        <Shoes />
      </Route>
      <Route path="/admin/shoes/add" exact>
        <AddShoes />
      </Route>
      <Route path="/admin/config" exact>
        <Config />
      </Route>
      <Route path="/admin/formula" exact>
        <Formula />
      </Route>
    </>
  );
}
