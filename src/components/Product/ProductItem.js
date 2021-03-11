import React from "react";
import { Card, Row, Typography } from "antd";

import "./ProductItem.css";

const { Text } = Typography;

const ProductItem = () => {
  return (
    <Card
    className="card__container"
      hoverable
      cover={
        <img
          alt="example"
          className="image__container"
          src="http://sneakernews.com/wp-content/uploads/2016/09/0901_JordanBreda.jpg"
        />
      }
    >
      <Row>
        <Text style={{ textAlign: "center" }} strong>
          {"Test"}
        </Text>
      </Row>
      <Row>
        <Text type="secondary">{`$${500}`}</Text>
      </Row>
    </Card>
  );
};

export default ProductItem;
