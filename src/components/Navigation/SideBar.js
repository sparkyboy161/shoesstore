import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.png";

import "./SideBar.css";

const { Sider } = Layout;

const SideBar = ({ collapsed }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      collapsedWidth={100}
      trigger={null}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="logo-image__container">
        <img src={logoImage} className="logo-image" />
        {!collapsed && (
          <span style={{ textTransform: "capitalize" }}>tiệm giày của Huy</span>
        )}
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="marketplace"
          icon={<ShopOutlined />}
          title="Marketplace"
        >
          <Menu.Item key="Monokabu">
            <Link to="/marketplace/monokabu">Monokabu</Link>
          </Menu.Item>
          <Menu.Item key="SnkrDunk">
            <Link to="/marketplace/snkrdunk">SnkrDunk</Link>
          </Menu.Item>
          <Menu.Item key="GOAT">
            <Link to="/marketplace/goat">GOAT</Link>
          </Menu.Item>
          <Menu.Item key="Adidas JP">
            <Link to="/marketplace/adidas">Adidas JP</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
