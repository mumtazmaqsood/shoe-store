import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            <h3>
                <Link to="/product/product1">Product1</Link>
            </h3>
            <h3>
                <Link to="/product/product2">Product2</Link>
            </h3>
            <h3>
                <Link to="/product/product3">Product3</Link>
            </h3>
            <h3>
                <Link to="/product/product4">Product4</Link>
            </h3>
            <h3>
                <Link to="/product/product5">Product5</Link>
            </h3>
            <h3>
                <Link to="/product/product6">Product6</Link>
            </h3>
            <h3>
                <Link to="/product/product7">Product7</Link>
            </h3>

        </div>
    )
}
