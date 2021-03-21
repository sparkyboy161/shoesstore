import React from "react";
import { Form, Button, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { User } from "../../services/firebase/user";

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const SignUpForm = ({ setLoading }) => {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values) => {
        setLoading(true);
        const key = 'createUser';
        const { email, password, username } = values;
        const res = await User.create(email, username, password);
        if (res.status === "error") {
            message.error({ content: res.message, key, duration: 3 });
        } else {
            message.success({ content: res.message, key, duration: 3 });
        }
        setLoading(false);
    };

    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ width: "50%" }}
        >
            <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="username"
                label="Tên đăng nhập"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                <Input.Password
                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item {...tailLayout} style={{ marginLeft: "9%" }}>
                <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                    Đăng ký
        </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
        </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpForm;
