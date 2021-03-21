import React, { useState } from 'react'
import { Col, Row, Typography } from 'antd'

import SignUpForm from '../../components/Form/SignUpForm'

import Spinner from '../../components/Spinner';

import './SignUp.css'

const { Title } = Typography;

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    return (
        loading ? <Spinner />
            : <div className={"signup__container"}>
                <Col style={{ marginTop: "5%" }}>
                    <Row justify="center">
                        <Title>Đăng ký</Title>
                    </Row>
                </Col>
                <Col>
                    <Row justify="center">
                        <SignUpForm setLoading={setLoading} />
                    </Row>
                </Col>
            </div>
    )
}
