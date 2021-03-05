import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, CrownOutlined , SettingOutlined } from "@ant-design/icons";
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
          <Link to="/admin">Home</Link>
        </Menu.Item>
        <Menu.Item key="shoes" icon={<CrownOutlined />}>
          <Link to="/admin/shoes">Shoes</Link>
        </Menu.Item>
        <Menu.Item key="config" icon={<SettingOutlined />}>
          <Link to="/admin/config">Config</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
