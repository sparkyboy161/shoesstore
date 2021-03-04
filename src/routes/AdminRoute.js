import React from 'react';
import { Route } from "react-router-dom";

import Home from "../views/admin/Home";
import Marketplace from '../views/admin/Marketplace';
import MarketplaceDetail from '../views/admin/MarketplaceDetail'

export default function AdminRoute() {
    return (
        <div>
            <Route path="/admin/marketplace" exact>
              <Marketplace />
            </Route>
            <Route path="/admin/marketplace/:place">
              <MarketplaceDetail />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
        </div>
    )
}


