import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";

import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import SideBar from "./components/Navigation/SideBar";
import MarketplaceDetail from "./views/MarketplaceDetail";

const { Header, Footer, Content } = Layout;

const App = () => (
  <Router>
    <Layout style={{height:"100vh"}}>
        <SideBar />
      <Layout>
        <Header></Header>
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

export default App;
