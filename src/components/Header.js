import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header">
            <hr />
            <ul>
                <li>
                    <h1 className=".store">
                        <Link to="/">  Shoe Store </Link>
                    </h1>
                </li>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="about">  About </Link>
                </li>
                <li>
                    <Link to="product"> Products </Link>
                </li>
            </ul>
            <hr />
        </div>

    )
}

