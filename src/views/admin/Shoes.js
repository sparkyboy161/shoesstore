import React from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

import ProductItem from "../../components/Product/ProductItem";

import './Shoes.css'

export default function Shoes() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Row className="product__list__container" style={{  }}>
      <Button type="primary">
        <Link to="/admin/shoes/add">Add</Link>
      </Button>
      <Row gutter={[24,16]}  style={{height: "100%"}} justify="center" >
        {test &&
          test.map((item, index) => <Col span={6} key={index} style={{display: 'flex', justifyContent: 'center'}}><ProductItem test={item}  /></Col>)}
      </Row>
    </Row>
  );
}
