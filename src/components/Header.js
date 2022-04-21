import "../styles/Header.css";

const Header = (props) => {
    return (
        <header id="header">
            <h1>{props.pageName}</h1>
            <div id="button-container">
                <button>Cart</button>
            </div>
        </header>
    );
};

export default Header;