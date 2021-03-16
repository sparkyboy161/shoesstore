import React, { useState } from "react";
import { Form, InputNumber, Select, Statistic } from "antd";

import {
  calculateBySource,
  currencyFormatter,
  getRegionBySource,
} from "../../utils";
import { getConfigByRegion } from "../../services/firebase/config";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const FormulaForm = () => {
  const [form] = Form.useForm();
  const [finalPrice, setFinalPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const onSourceChange = async (value) => {
    const region = getRegionBySource(value);
    const currentConfig = await getConfigByRegion(region);
    if (currentConfig) {
      form.setFieldsValue({
        exchangeRate: currentConfig.exchangeRate,
        shipFee: currentConfig.shipFee,
      });
      if (currentPrice !== 0) {
        console.log("currentPrice: ", currentPrice);
        calculateFinalPrice(currentPrice);
      }
    }
  };

  const priceChangeHandle = (value) => {
    setCurrentPrice(value);
    calculateFinalPrice(value);
  };

  const calculateFinalPrice = (value) => {
    const source = form.getFieldValue("source");
    const exchangeRate = form.getFieldValue("exchangeRate");
    const shipFee = form.getFieldValue("shipFee");

    if (source && exchangeRate && shipFee) {
      const config = { exchangeRate, shipFee };
      setFinalPrice(calculateBySource(source, config, value));
    }
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        style={{ width: "50%" }}
      >
        <Form.Item name="originalPrice" label="Giá gốc">
          <InputNumber onChange={priceChangeHandle} />
        </Form.Item>
        <Form.Item name="source" label="Khu vực" rules={[{ required: true }]}>
          <Select
            placeholder="Select a specific source"
            onChange={onSourceChange}
            allowClear
            rules={[{ required: true }]}
          >
            <Option value="monokabu">{"Monokabu"}</Option>
            <Option value="snkrdunk">{"Snkrdunk"}</Option>
            <Option value="goat">{"Goat"}</Option>
            <Option value="kream">{"Kream"}</Option>
            <Option value="adidas">{"Adidas"}</Option>
            <Option value="nike">{"Nike"}</Option>
            <Option value="dewu">{"Dewu"}</Option>
          </Select>
        </Form.Item>
        <Form.Item name="exchangeRate" label="Tỷ giá">
          <InputNumber disabled={true} />
        </Form.Item>
        <Form.Item name="shipFee" label="Phí ship">
          <InputNumber
            formatter={(value) => currencyFormatter(value)}
            disabled={true}
          />
        </Form.Item>
      </Form>

      <Statistic title="Giá tiền Việt" value={finalPrice} />
    </>
  );
};

export default FormulaForm;
