import { Button } from '@material-ui/core';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductDetail = () => {

    const {id} = useParams();
    const navigatProduct = useNavigate();

    return (
        <div>
           <h1> {id}</h1>
           <Button onClick = { () => navigatProduct("/product")}>Products</Button>
        </div>
    )
}
