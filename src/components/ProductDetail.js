import { Button } from '@material-ui/core';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductDetail = ({detailData}) => {
    console.log("ProductDetails Data", detailData);

    const navigatProduct = useNavigate();
    const {id} = useParams();   //when product clicked on Products.js page , id has been recorded
    const product = detailData[id]; //detailData is apiData comming from App.js, it finds data from whole data
    console.log("ProductID-->", product);
    
    if(!product){
        return <h1>Product not Found</h1>
    }
    const { title, image, description} = product;  //destructing specific selected product 

    return (
        <div>
           <h1> {title}</h1>
           <img src={image} height="500"/>
           { description}
           <Button onClick = { () => navigatProduct("/product")}>Products</Button>
        </div>
    )
}
