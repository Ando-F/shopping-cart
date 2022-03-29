import "../styles/Item.css";

import Arrows from "./item-components/Arrows";
import Button from "./item-components/Button";
import {useState} from "react";

const Item = (props) => {
    const [buttonStatus, setButtonStatus] = useState(false);

    const changeButtonStatus = () => {
        setButtonStatus(true);
    }
    return (
        <div className="item">
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
            <p>${props.price}</p>
            {(buttonStatus === false) ? <Button checkStatus={changeButtonStatus} increase={props.increase} class={props.class}/> :
                <Arrows count={props.count} class={props.class} increase={props.increase} />}

        </div>
    );
};

export default Item;