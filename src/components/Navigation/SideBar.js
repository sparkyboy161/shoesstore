import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, CrownOutlined , SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideBar = ({ collapsed, handleCollapse }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
      trigger={null}
    >
      <Menu theme="dark" mode="inline" >
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
