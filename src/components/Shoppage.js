import Nav from "./Nav";
import Header from "./Header";
import MainShop from "./MainShop";

const Shoppage = () => {
    return (
        <div id="shop">
            <Header pageName={'Shop'}/>
            <Nav />
            <MainShop />
        </div>
    );
};

export default Shoppage;