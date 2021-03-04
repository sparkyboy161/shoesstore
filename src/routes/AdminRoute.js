import React from 'react';
import { Route } from "react-router-dom";

import Config from '../views/admin/Config';
import Home from "../views/admin/Home";
import Marketplace from '../views/Marketplace';

export default function AdminRoute() {
    return (
        <div>
            <Route path="/marketplace" exact>
              <Marketplace />
            </Route>
            <Route path="/admin/config">
              <Config/>
            </Route>
            <Route path="/admin" exact>
              <Home />
            </Route>
        </div>
    )
}


