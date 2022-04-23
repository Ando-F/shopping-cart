import React from 'react';
import Arrows from "../../UI/Arrows/Arrows";

import '../../styles/CartItem.css';

const CartItem = ({item}) => {
    return (
        <div className="cart-item">
            <h1 className="cart-item__title">{item.name}</h1>
            <div className="cart-item__price">
                <Arrows item={item} />
                <p>$ {item.quantity * item.price}</p>
            </div>
        </div>
    );
};

export default CartItem;