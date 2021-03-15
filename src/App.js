import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Layout } from "antd";

import "./App.css";

import AdminRoute from "./routes/AdminRoute";

import SideBar from "./components/Navigation/SideBar";
import CustomHeader from "./components/Header/CustomHeader";

const { Footer, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <CustomHeader collapsed={collapsed} handleCollapse={handleCollapse} />
        <Layout>
        <SideBar collapsed={collapsed} handleCollapse={handleCollapse} />
          <Content className="content__container">
            <Switch>
              <AdminRoute />
            </Switch>
          </Content>
        </Layout>
      </Layout>
          <Footer>Footer</Footer>

    </Router>
  );
};

export default App;
