import React from "react";
import { Layout, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/jordan_logo.png";
import "./CustomHeader.css";

const { Header } = Layout;

const CustomHeader = ({ handleCollapse, collapsed }) => {
  return (
    <Header className="header__container">
      <Row align="center" style={{height: '100%'}}>
        <img className="logo__container" src={Logo} />
        {
          !collapsed ? <div className="logo__title">Tiệm giày của Huy</div> : ''
        }
      </Row>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: collapsed?  "trigger": "trigger open",
        onClick: handleCollapse,
      })}
    </Header>
  );
};

export default CustomHeader;
