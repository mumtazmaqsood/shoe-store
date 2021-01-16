import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import './ProductDetail.css';

export const ProductDetail = ({ detailData }) => {
    console.log("ProductDetails Data", detailData);


    const addItem = useContext(GlobalContext);

    const navigatProduct = useNavigate();
    const { id } = useParams(); //when product clicked on Products.js page , id has been recorded
    const product = detailData[id]; //detailData is apiData comming from App.js, it finds data from whole data
    console.log("ProductID-->", product);

    if (!product) {
        return <h1 > Product not Found </h1>
    }
    const { title, image,price, description } = product;  //destructing specific selected product

    return (
        <div className="detail-container" >

            <div className="item1" >
                <img src={image} height="500" />
            </div>

            <div className="item2" >
                <h1> {title} </h1>
                {description}
                <Button onClick={() => navigatProduct("/product")} > Products </Button>
                <div className="addCart-button"
                    onClick={() => addItem.dispatch({type: 'addItem', payload: {id, image, title,  price }}) }>
                    Add Cart 
                </div>
            </div>
        </div>
    )
}