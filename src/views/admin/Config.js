import React , {useEffect} from 'react';
import { Row, Typography } from 'antd';

import ConfigForm from '../../components/Form/ConfigForm';

import './Config.css';
import { getConfigByRegion } from '../../services/firebase/config';

const {Title} = Typography;

export default function Config() {

    useEffect(()=>{
        test();
    },[])

    async function test() {
        await getConfigByRegion('jp');
    }



    return (
        <div className={"config__container"}>
            <Row>
                <Title >Config settings</Title>
            </Row>
            <ConfigForm/>
        </div>
    )
}
