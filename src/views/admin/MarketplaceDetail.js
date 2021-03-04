import React from 'react'
import { useParams } from 'react-router-dom';

export default function MarketplaceDetail() {
    let { place } = useParams(); 
    return (
        <div>
            {place}
        </div>
    )
}
