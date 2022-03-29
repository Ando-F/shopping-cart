const Button = (props) => {
    return (
        <div className="add-to-cart">
            <button className={props.class} onClick={() => {props.checkStatus(); props.increase()}}>Add to card</button>
        </div>
    );
};

export default Button;