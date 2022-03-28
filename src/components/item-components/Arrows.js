import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.jpg";

const Arrows = (props) => {
    return (
        <div className="arrows">
            <img src={leftArrow} alt=""/>
            <div className="count">{props.count}</div>
            <img src={rightArrow} id={props.id} onClick={props.increase} alt=""/>
        </div>
    );
};

export default Arrows;