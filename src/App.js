import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";

import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import HorizontalMenu from "./components/Navigation/HorizontalMenu";

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <Layout class="container">
    <Header>
      <HorizontalMenu />
    </Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>

    <Router>
      <Switch>
        <Route path="/marketplace" exact>
          <Marketplace />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  </Layout>
);

export default App;
