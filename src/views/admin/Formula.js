import React from "react";
import { Col, Row, Typography } from "antd";

import ConfigForm from "../../components/Form/ConfigForm";

import "./Formula.css";

const { Title } = Typography;

export default function Formula() {
  return (
    <div className={"formula__container"}>
      <Col style={{ marginTop: "5%" }}>
        <Row justify="center">
          <Title>Formula settings</Title>
        </Row>
      </Col>
      <Col>
        <Row justify="center">
          <ConfigForm />
        </Row>
      </Col>
    </div>
  );
}
