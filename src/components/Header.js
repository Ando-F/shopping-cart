import "../styles/Header.css";
import {useState} from "react";
import Cart from "./shop/Cart";

const Header = (props) => {
    const [cartToggle, setCartToggle] = useState(false);

    return (
        <header id="header">
            <h1>{props.pageName}</h1>
            <div id="button-container">
                <button onClick={() => setCartToggle(!cartToggle)}>Cart</button>
            </div>
            {cartToggle ? <Cart /> : null}
        </header>
    );
};

export default Header;