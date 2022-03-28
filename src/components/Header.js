import "../styles/Header.css";

const Header = (props) => {
    return (
        <div id="header">
            <h1>{props.pageName}</h1>
            <div id="button-container">
                <button>Cart</button>
            </div>
        </div>
    );
};

export default Header;