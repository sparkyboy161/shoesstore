import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./App.css";

import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import SideBar from "./components/Navigation/SideBar";
import MarketplaceDetail from "./views/MarketplaceDetail";

const { Header, Footer, Content } = Layout;

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
          <Header style={{ display: "flex" }}>
            <div onClick={handleCollapse} className="collapse-icon__container">
              {collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: 40, color: "white" }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: 40, color: "white" }} />
              )}
            </div>
          </Header>
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
