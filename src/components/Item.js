import "../styles/Item.css";

import {increment} from '../redux/reducers/itemsSlice';
import {useDispatch} from "react-redux";
import Arrows from "../UI/Arrows/Arrows";

const Item = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <img className="item__good-image" src={item.img} alt=""/>
            <h1>{item.name}</h1>
            <p>$ {item.price}</p>
            {(item.quantity <= 0) ?
                <div className="add-to-cart">
                    <button id={item.id} onClick={() => dispatch(increment(item.id))}>Add to card</button>
                </div>
                :
                <Arrows item={item}/>
            }
        </div>
    );
};

export default Item;