import React, { useEffect, useState } from "react";
import { Button, Row, Col, Pagination } from "antd";
import { Link } from "react-router-dom";

import ProductItem from "../../components/Product/ProductItem";

import { getShoesList } from "../../services/firebase/shoes";

import "./Shoes.css";

export default function Shoes() {
  const [shoesList, setShoesList] = useState(["1"]);
  const [total] = useState(100);
  const [pageSize, setPageSize] = useState(4);

  useEffect(async () => {
    initializePage();
  }, []);

  const initializePage = async () => {
    const res = await getShoesList(pageSize);
    console.log("res: ", res);
    setShoesList(res);
  };

  const onShowSizeChange = (_current, _pageSize) => {
    console.log(_current, _pageSize);
    setPageSize(_pageSize);
  };

  return (
    <Row className="product_list__container">
      <Col>
        <Row className="button__container" justify="end">
          <Button type="primary" size="middle">
            <Link to="/admin/shoes/add">Add</Link>
          </Button>
        </Row>
        <Row
          style={{ marginTop: 20 }}
          gutter={[24, 16]}
          className="shoes_list__container"
          justify="center"
        >
          {shoesList &&
            shoesList.map((shoes, index) => (
              <Col
                span={6}
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductItem shoes={shoes} />
              </Col>
            ))}
        </Row>
      </Col>
      <Row
        align="bottom"
        justify="center"
        style={{ width: "100%" }}
        className="pagination__container"
      >
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          pageSize={pageSize}
          total={total}
          showTotal={(total) => `Tổng cộng ${total} sản phẩm`}
        />
      </Row>
    </Row>
  );
}
