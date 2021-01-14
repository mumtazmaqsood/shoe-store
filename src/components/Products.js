import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



/*api Data structure is [{}], 
means --> on zeroth level 
[0 {id, title, image, description},
[1 {id, title, image, description},
[2 {id, title, image, description}]    
*/


export const Products = ({ productData }) => {

    console.log("productData", productData);
    return (

        <div >
            <ul className="products-wrapper">
                {Object.entries(productData).map(([id, { title, image, description, price }]) =>
                (<li className="items">
                    <Link to={`/product/${id}`}>
                        <h3 className="title">{title}</h3><br />
                        <li className="des"><img src={image}
                            height="200" width="180" alt="{price}" className="image"></img> <br />
                            {description}</li><br />
                        
                    </Link>
                    <li className="price">Price:${price} 
                     <button onClick={(e) => { alert("added to cart") }}>Add to Cart</button></li>

                </li>))}
            </ul>
        </div>
    )
}
