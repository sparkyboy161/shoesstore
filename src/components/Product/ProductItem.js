import React from "react";
import { Card, Row, Typography } from "antd";

import "./ProductItem.css";

const { Text } = Typography;

const ProductItem = ({shoes}) => {

  const {name, photos, model} = shoes;
  const alterPic = 'http://sneakernews.com/wp-content/uploads/2016/09/0901_JordanBreda.jpg';
  return (
    <Card
    className="card__container"
      hoverable
      cover={
        <img
          alt="example"
          className="image__container"
          src={photos && photos[0] ? photos[0] : alterPic}
        />
      }
    >
      <Row>
        <Text style={{ textAlign: "center" }} strong>
          {name ? name : 'Unknown'}
        </Text>
      </Row>
      <Row justify="space-between">
        <Text >Model: {`${model}`}</Text>
        <Text type="secondary" >Giá: 500.000 đồng</Text>
      </Row>
    </Card>
  );
};

export default ProductItem;
