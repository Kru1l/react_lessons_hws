import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";

const Main = () => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Hello World!</h1>
            <h3 style={{textAlign: "center"}}>
                <Link to={AppRoutes.LOGIN}>Login</Link> to continue
            </h3>
        </div>
    );
};

export default Main;