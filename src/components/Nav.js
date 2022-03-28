import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shoppage">Shop</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;