import React , {useEffect} from 'react';
import { Row, Typography } from 'antd';

import ShoesForm from '../../components/Form/ShoesForm';

import './AddShoes.css';
import { getConfigByRegion } from '../../services/firebase/config';

const {Title} = Typography;

export default function AddShoes() {

    useEffect(()=>{
        test();
    },[])

    async function test() {
        await getConfigByRegion('jp');
    }



    return (
        <div className={"add-shoes__container"}>
            <Row>
                <Title >Thêm thông tin giày</Title>
            </Row>
            <ShoesForm/>
        </div>
    )
}
