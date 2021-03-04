import React from 'react';
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Label from './Label';

const { Header } = Layout;

const CustomHeader = ({handleCollapse, collapsed}) => {
    return (
         <Header style={{ display: "flex" }}>
            <div onClick={handleCollapse} className="collapse-icon__container">
              {collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: 40, color: "white" }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: 40, color: "white" }} />
              )}
              <Label collapsed={collapsed}/>
            </div>
          </Header>
    )
}

export default CustomHeader
