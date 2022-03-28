import {useState} from "react";

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
        let id = e.target.id;
        let quantity = items[id].quantity;
        quantity += 1;
        setItems(prevState => ({
            ...items,
            [id]: {
                ...prevState[id],
                quantity: quantity,
            }
        }))
        console.log(items);
    }

    return (
        <div id="main-shop">
            <h1>Main Shop Page</h1>
            <Item id={0} img={items[0].img} name={items[0].name} price={items[0].price} count={items[0].quantity} increase={increaseCount}/>
        </div>
    );
};

export default MainShop;