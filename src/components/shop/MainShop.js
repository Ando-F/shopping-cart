import React from "react";
import {useSelector} from "react-redux";

import "../../styles/MainShop.css";

import Item from "../Item";

const MainShop = () => {
    const items = useSelector((state) => state.items.value);

    const listOfItems = () => {
        return items.map(item => {
            return (
                <Item key={item.id} item={item} />
            )
        })
    }

    return (
        <div id="main-shop">
            {listOfItems()}
        </div>
    );
};

export default MainShop;