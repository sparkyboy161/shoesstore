import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "antd";


import "./App.css";

import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import SideBar from "./components/Navigation/SideBar";
import MarketplaceDetail from "./views/MarketplaceDetail";
import CustomHeader from "./components/Header/CustomHeader";

const { Footer, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <SideBar collapsed={collapsed} handleCollapse={handleCollapse} />
        <Layout>
          <CustomHeader collapsed={collapsed} handleCollapse={handleCollapse}/>
          <Content>
            <Switch>
              <Route path="/marketplace" exact>
                <Marketplace />
              </Route>
              <Route path="/marketplace/:place">
                <MarketplaceDetail />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
