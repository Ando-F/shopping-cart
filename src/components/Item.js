import "../styles/Item.css";

import rightArrow from "../images/right-arrow.png";
import leftArrow from "../images/left-arrow.jpg";

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
            <p>${props.price}</p>
            <div className="arrows">
                <img src={leftArrow} alt=""/>
                <div className="count">{props.count}</div>
                <img src={rightArrow} id={props.id} onClick={props.increase} alt=""/>
            </div>
        </div>
    );
};

export default Item;