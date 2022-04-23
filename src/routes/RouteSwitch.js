import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainShop from "../components/shop/MainShop";
import MainHome from "../components/MainHome";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainHome />} />
                    <Route path="shop" element={<MainShop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;