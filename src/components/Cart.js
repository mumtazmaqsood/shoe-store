import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Cart = () => {

    const {items, delItem} = useContext(GlobalContext);  //it is getting data form initial state
    
    console.log("delItem", delItem)

    return (
        <div>
            <h1>Shopping Cart</h1>
            {items.map((item, id) => 
                <h2 key={id}>{item.id, item.title } ${item.price}
                <button onClick={() => delItem(item.id) }>Delete</button>
                </h2> )}
        </div>
    )
}
