import React, { useState } from 'react'
import { Col, Row, Typography } from 'antd'

import SignInForm from '../../components/Form/SignInForm'

import Spinner from '../../components/Spinner';

import './SignIn.css'

const { Title } = Typography;

export default function SignIn() {
    const [loading, setLoading] = useState(false);

    return (
        loading ? <Spinner />
            : <div className={"signin__container"}>
                <Col style={{ marginTop: "5%" }}>
                    <Row justify="center">
                        <Title>Đăng nhập</Title>
                    </Row>
                </Col>
                <Col>
                    <Row justify="center">
                        <SignInForm setLoading={setLoading} />
                    </Row>
                </Col>
            </div>
    )
}
