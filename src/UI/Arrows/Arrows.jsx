import React from 'react';

import {decrement, increment} from "../../redux/reducers/itemsSlice";
import {useDispatch} from "react-redux";

import './Arrows.css';
import leftArrow from "../../images/left-arrow.jpg";
import rightArrow from "../../images/right-arrow.png";

const Arrows = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className="arrows">
            <img src={leftArrow} id={item.id} alt="" onClick={() => dispatch(decrement(item.id))}/>
            <div className="count">{item.quantity}</div>
            <img src={rightArrow} id={item.id} alt="" onClick={() => dispatch(increment(item.id))} />
        </div>
    );
};

export default Arrows;