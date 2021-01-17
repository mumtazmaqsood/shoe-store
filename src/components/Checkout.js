import React from 'react';
import './Checkout.css'



export const Checkout = ({checkoutitems}) => {
    return (
        <div className="checkout-wrapper">
            <div className="info">
                {/* Your order has been placed */}

                {checkoutitems}
            </div>
            <div className="cart">
            
            </div>
        </div>
    )
}
