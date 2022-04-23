import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

import '../../styles/Cart.css';

const Cart = () => {
    const items = useSelector((state) => state.items.value);

    const itemsList = () => {
        return items.map(item => {
            if (item.quantity > 0) {
                return (
                    <CartItem key={item.id} item={item} />
                )
            }
        })
    }

    const itemsInCart = () => {
        return items.filter(item => item.quantity > 0);
    }

    const countTotal = (array) => {
        return array.reduce((sum, {price, quantity}) => sum + price * quantity, 0)
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Cart</h1>
            <div className="goods">
                {itemsList()}
            </div>
            <h2>Total: $ {countTotal(itemsInCart())}</h2>
        </div>
    );
};

export default Cart;