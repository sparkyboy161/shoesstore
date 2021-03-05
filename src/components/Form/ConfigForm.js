import React from "react";
import { Form, InputNumber, Select, Button, Input, message } from "antd";

import { currencyFormatter } from "../../utils";
import { createConfig, getConfigByRegion } from "../../services/firebase/config";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ConfigForm = () => {
  const [form] = Form.useForm();

  const onRegionChange = async (value) => {
    const currentConfig = await getConfigByRegion(value);
    if (currentConfig) {  
      form.setFieldsValue({
        exchangeRate: currentConfig.exchangeRate,
        shipFee: currentConfig.shipFee,
      });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values) => {
    const key = "createConfig";
    message.loading({ content: "Đợi tí nào...", key });
    const res = await createConfig(values);
    console.log('res: ', res);
    if (res.status === "error") {
      message.error({ content: res.message, key, duration: 3 });
    } else {
      message.success({ content: res.message, key, duration: 3 });
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ width: "50%" }}
    >
      <Form.Item name="region" label="Khu vực" rules={[{ required: true }]}>
        <Select
          placeholder="Select a specific region"
          onChange={onRegionChange}
          allowClear
          rules={[{ required: true }]}
        >
          <Option value="jp">Japan</Option>
          <Option value="us">US</Option>
          <Option value="kr">Korean</Option>
          <Option value="cny">China</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="exchangeRate"
        label="Tỷ giá"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="shipFee" label="Phí ship" rules={[{ required: true }]}>
        <InputNumber
          formatter={(value) => currencyFormatter(value)}
        />
      </Form.Item>
      <Form.Item {...tailLayout} style={{ marginLeft: "9%" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfigForm;
