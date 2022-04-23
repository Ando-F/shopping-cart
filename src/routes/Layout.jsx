import React from 'react';
import { Outlet } from 'react-router-dom'

import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div>
            <Header pageName={'My Shop'}/>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Layout;