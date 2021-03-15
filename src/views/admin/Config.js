import React from "react";
import { Col, Row, Typography } from "antd";

import ConfigForm from "../../components/Form/ConfigForm";

import "./Config.css";

const { Title } = Typography;

export default function Config() {
  return (
    <div className={"config__container"}>
      <Col style={{marginTop: '5%'}}>
        <Row style={{ width: "100%" }} justify="center">
          <Title>Config settings</Title>
        </Row>
      </Col>
      <Col className="config--form__container">
        <Row style={{ width: "100%" }} justify="center">
          <ConfigForm />
        </Row>
      </Col>
    </div>
  );
}
