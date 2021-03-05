import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Shoes() {
    return (
        <div style={{height: '100%'}}>
            <Button type="primary"><Link to="/admin/shoes/add">Add</Link></Button>
        </div>
    )
}
