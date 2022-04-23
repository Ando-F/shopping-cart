import "../styles/Item.css";
import leftArrow from "../images/left-arrow.jpg";
import rightArrow from "../images/right-arrow.png";

const Item = ({item, increase, decrease}) => {
    return (
        <div className="item">
            <img className="item__good-image" src={item.img} alt=""/>
            <h1>{item.name}</h1>
            <p>$ {item.price}</p>
            {(item.quantity <= 0) ?
                <div className="add-to-cart">
                    <button id={item.id} onClick={increase}>Add to card</button>
                </div>
                :
                <div className="arrows">
                    <img src={leftArrow} id={item.id} alt="" onClick={decrease}/>
                    <div className="count">{item.quantity}</div>
                    <img src={rightArrow} id={item.id} alt="" onClick={increase} />
                </div>
            }
        </div>
    );
};

export default Item;