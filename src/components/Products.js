import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';



/*api Data structure is [{}], 
means --> on zeroth level 
[0 {id, title, image, description},
[1 {id, title, image, description},
[2 {id, title, image, description}]    
*/


export const Products = ({ productData }) => {
    console.log("productData", productData);

    const addItem = useContext(GlobalContext);

    console.log("addITem", addItem);

    return (

        <div >
            <ul className="products-wrapper">
                {Object.entries(productData).map(([id, { title, image, description, price }]) =>
                (<li className="items" key={id}>
                    <Link to={`/product/${id}`}>
                        <h3 className="title">{title}</h3><br />
                        <li className="des"><img src={image}
                            height="200" width="180" alt="{price}" className="image"></img> <br />
                            {description}
                        </li><br />

                    </Link>
                    <li className="price">Price:${price}
                        <button onClick={() => 
                            addItem.dispatch({
                                type: 'addItem', payload: {id, image, title,  price }
                            }) 
                            
                        }>
                            Add to Cart</button></li>

                </li>))}
            </ul>
        </div>
    )
}
