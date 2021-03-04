import { Row, Typography } from 'antd';
import React from 'react';

import ConfigForm from '../../components/Form/ConfigForm';

import './Config.css';

const {Title} = Typography;

export default function Config() {
    return (
        <div className={"config__container"}>
            <Row>
                <Title >Config settings</Title>
            </Row>
            <ConfigForm/>
        </div>
    )
}
