import "../styles/Item.css";

import Arrows from "./item-components/Arrows";

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
            <p>${props.price}</p>
            <Arrows count={props.count} id={props.id} increase={props.increase} />
        </div>
    );
};

export default Item;