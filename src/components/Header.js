const Header = (props) => {
    return (
        <div>
            <h1>{props.pageName}</h1>
            <button>Cart</button>
        </div>
    );
};

export default Header;