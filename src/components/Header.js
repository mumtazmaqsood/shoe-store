import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
    const {items} = useContext(GlobalContext); 
    //through Globalstate get items , then find the length and display in fornt of cart
    console.log("items.length",items.length)
    return (
        <div className="header">
            <hr />
            <ul>
                <li>
                    <h1 className=".store">
                        <Link to="/">  Web Shop </Link>
                    </h1>
                </li>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="product"> Products </Link>
                </li>
                <li>
                    <Link to="about">  About </Link>
                </li>
                <li className="shoppingCart">
                    {/* if cart is empty then show nothing else show items */}
                    <Link to="cart"> Cart {items.length? ":"+items.length:""}</Link>
                </li>
            </ul>
            <hr />
        </div>

    )
}

