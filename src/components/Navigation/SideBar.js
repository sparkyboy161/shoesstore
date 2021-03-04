import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./SideBar.css";
import Logo from "./Logo";

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
      <Logo collapsed={collapsed}/>
      <Menu theme="dark" mode="inline" className="menu__container">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="marketplace"
          icon={<ShopOutlined />}
          title="Marketplace"
        >
          <Menu.Item key="Monokabu">
            <Link to="/admin/marketplace/monokabu">Monokabu</Link>
          </Menu.Item>
          <Menu.Item key="SnkrDunk">
            <Link to="/admin/marketplace/snkrdunk">SnkrDunk</Link>
          </Menu.Item>
          <Menu.Item key="GOAT">
            <Link to="/admin/marketplace/goat">GOAT</Link>
          </Menu.Item>
          <Menu.Item key="Adidas JP">
            <Link to="/admin/marketplace/adidas">Adidas JP</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
