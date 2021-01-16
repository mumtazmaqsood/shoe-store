import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Cart.css';

export const Cart = () => {

    const { items, delItem } = useContext(GlobalContext); //it is getting data form initial state

    const totalPrice = [];  
    //this array is using to calculate total price
    

    return (
        <div className="main-cart-wrapper">
            <h1> Shopping Cart </h1>

            {items.map((item, id) =>
                <div className="cart-wrapper" key={id} >
                    {totalPrice.push(item.price)}

                    <div className="cart-image" >
                        <img src={item.image} width="100" height="100" />
                    </div>

                    <div className="cart-title" > {item.id, item.title}
                    </div>
                    <div className="cart-price" >
                        $ {item.price} </div>
                    <div className="cart-btn" >

                        <button onClick={
                            () => delItem(item.id)} > Delete </button>
                    </div>
                </div>
            )

            }
            <div className="cart-totalPrice">
                <div>
                Total Price:
                </div>
                <div>
                ${totalPrice.reduce(function (a, b) { return a + b; }, 0)}
                </div>
            </div>
        </div>
    )
}