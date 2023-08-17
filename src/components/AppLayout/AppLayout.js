import React from 'react';
import Navbar from "./Navbar/Navbar";
import {Outlet} from "react-router";

const AppLayout = () => {

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default AppLayout;