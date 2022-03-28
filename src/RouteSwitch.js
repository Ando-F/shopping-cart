import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shoppage" element={<Shoppage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;