import React from 'react';
import './Checkout.css';
import {Cart} from './Cart'



export const Checkout = ({checkoutitems}) => {
    return (
        <div className="checkout-wrapper">
            <div className="info">
                <h1>Checkout Sucessfully</h1>
            </div>
            <div className="cart">
            {/* <Cart /> */}
            </div>
        </div>
    )
}
