import React, { useState } from "react";
import { Form, Select, Button, Input, message } from "antd";

import { TYPE_OF_NIKE, TYPE_OF_ADIDAS } from "../../const/shoes";
import { createShoes } from "../../services/firebase/shoes";
import { saveImage } from "../../services/firebase";
import UploadImage from "./UploadImage";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ShoesForm = () => {
  const [form] = Form.useForm();
  const [types, setTypes] = useState([]);
  const [fileList, setFileList] = useState([]);

  const onBrandChange = (value) => {
    if (value === "adidas") {
      setTypes(TYPE_OF_ADIDAS);
    } else if (value === "nike") {
      setTypes(TYPE_OF_NIKE);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const getValueFromEvent = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    if ((e.fileList, length > 1)) {
      e.fileList.shift();
    }
    return e && e.fileList;
  };

  const onFinish = async (values) => {
    const key = "createShoes";
    message.loading({ content: "Đợi tí nào...", key });
    const res = await createShoes(values);
    if (res.status === "error") {
      message.error({ content: res.message, key, duration: 3 });
    } else {
      message.success({ content: res.message, key, duration: 3 });
      const { id } = res;
      message.loading({ content: "Đang up ảnh nha...", key: "uploadimage" });
      let ctr = 0;
      fileList.forEach(async (file) => {
        await saveImage(file, id,ctr);
        ctr++;
        if(ctr === fileList.length) {
          message.success({ content: "Up thành công", key: "uploadimage" });
        }
      });
    }
    console.log("values: ", values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ width: "50%" }}
    >
      <Form.Item name="name" label="Tên giày" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="brand" label="Hãng" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn hãng"
          allowClear
          rules={[{ required: true }]}
          onChange={onBrandChange}
        >
          <Option value="adidas">Adidas</Option>
          <Option value="nike">Nike</Option>
        </Select>
      </Form.Item>
      <Form.Item name="category" label="Phân loại" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn phân loại giày"
          allowClear
          rules={[{ required: true }]}
        >
          <Option value="low">Low</Option>
          <Option value="mid">Mid</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>
      <Form.Item name="model" label="Model" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="type" label="Dòng giày" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn dòng giày"
          allowClear
          rules={[{ required: true }]}
        >
          {types &&
            types.map((type, index) => (
              <Option key={index} value={type.name}>
                {type.label}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        valuePropName="fileList"
        getValueFromEvent={getValueFromEvent}
        label="Ảnh chi tiết"
      >
        <UploadImage fileList={fileList} setFileList={setFileList} />
      </Form.Item>
      <Form.Item {...tailLayout} style={{ marginLeft: "9%" }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 25 }}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShoesForm;
