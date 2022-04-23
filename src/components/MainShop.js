import {useState} from "react";
import uniqid from 'uniqid';

import "../styles/MainShop.css";
import apple from '../images/iu.png';
import banana from '../images/iu-2.png';

import Item from "./Item";

const MainShop = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            uniqid: uniqid(),
            img: apple,
            name: 'Apple',
            price: 10,
            quantity: 0
        },
        {
            id: 2,
            uniqid: uniqid(),
            img: banana,
            name: 'Banana',
            price: 15,
            quantity: 0
        }
    ])

    const increaseCount = (e) => {
        const id = Number(e.target.id) - 1;
        const newItems = [...items];
        newItems[id].quantity += 1;
        setItems(newItems);
    }

    const decreaseCount = (e) => {
        const id = Number(e.target.id) - 1;
        const newItems = [...items];
        if (newItems[id].quantity > 0) {
            newItems[id].quantity -= 1;
        }
        setItems(newItems);
    }

    const listOfItems = () => {
        return items.map(item => {
            return (
                <Item key={item.id} item={item} increase={increaseCount} decrease={decreaseCount}/>
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