import React from 'react';
import styles from './Navbar.module.css'
import {AppRoutes} from "../../../Routing/AppRoutes";
import {Link} from "react-router-dom";

const Navbar = () => {
    const buttons = [
        {
            label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            label: 'Cars',
            route: AppRoutes.CARS
        },
        {
            label: 'Users',
            route: AppRoutes.USERS
        },
        {
            label: 'Comments',
            route: AppRoutes.COMMENTS
        },
    ]

    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <div className={styles.buttons}>
                    {buttons.map((btn, idx) => {
                        return (
                            <Link style={{textDecoration: 'none', color: "black"}}
                                  key={idx} to={btn.route}>{btn.label}</Link>
                        )
                    })}
                </div>
            </div>

            <div className={styles.right}>
                <p><b>Contacts</b></p>
            </div>
        </div>
    );
};

export default Navbar;