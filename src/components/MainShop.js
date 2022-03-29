import {useState} from "react";

import "../styles/MainShop.css";

import Item from "./Item";
import {apple, banana} from "./Images";

const MainShop = () => {
    const [items, setItems] = useState({
        0: {
            img: apple,
            name: 'Apple',
            price: 10,
            quantity: 0
        },
        1: {
            img: banana,
            name: 'Banana',
            price: 15,
            quantity: 0
        }
    })

    const increaseCount = (e) => {
        let className = e.target.className;
        let quantity = items[className].quantity;
        quantity += 1;
        setItems(prevState => ({
            ...items,
            [className]: {
                ...prevState[className],
                quantity: quantity,
            }
        }))
        console.log(items);
    }

    return (
        <div id="main-shop">
            <Item class={0} img={items[0].img} name={items[0].name} price={items[0].price} count={items[0].quantity} increase={increaseCount}/>
            <Item class={1} img={items[1].img} name={items[1].name} price={items[1].price} count={items[1].quantity} increase={increaseCount}/>
        </div>
    );
};

export default MainShop;