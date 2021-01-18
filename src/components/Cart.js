import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Cart.css';
import { Link } from 'react-router-dom';


export const Cart = () => {

    const { items, delItem } = useContext(GlobalContext);
    //it is getting data form initial state

    const emptyCart = useContext(GlobalContext);

    const totalPrice = [];
    //this array is using to calculate total price
    //console.log("totalPrice", totalPrice)

    
    
    return (
        <div className="main-cart-wrapper">
            <h1 className="sc"> Shopping Cart {items.length ? `has:${items.length} items` : "is empty"} </h1>



            {items.map((item, id) =>
                <div className="cart-wrapper" key={id} >
                    {totalPrice.push(item.price)}

                    <div className="cart-image" >
                        <img src={item.image} width="100" height="100" alt={item.title} />
                    </div>

                    <div className="cart-title" > {item.id} {item.title}
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

            {/* if there is items in cart then show this div else nothing */}
            {items.length ?
                <div className="cart-totalPrice">
                    <div>
                        Total Price:
                    </div>
                    <div>
                        ${totalPrice.reduce(function (a, b) { return a + b; }, 0)}
                    </div>
                    <div className="checkout">
                        <Link to="/checkout" >
                            <button onClick={() => {
                                emptyCart.dispatch({ type: 'checkout', payload: {} }) }}>
                                Checkout </button>
                                
                        </Link>

                    </div>
                </div>
                :" "}        
        </div>
    )
}