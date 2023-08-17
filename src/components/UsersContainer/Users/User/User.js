import React from 'react';
import styles from './User.module.css'
import {useNavigate} from "react-router";
import {AppRoutes} from "../../../../Routing/AppRoutes";

const User = ({user}) => {
    const {id, name, username} = user;
    const navigate = useNavigate();
    const handleClick = () => navigate(AppRoutes.USERS + `/${id}`);

    return (
        <div onClick={handleClick} className={styles.data}>
            <p><b>User ID:</b> {id}</p>
            <p><b>User Name:</b> {name}</p>
            <p><b>Username:</b> {username}</p>
        </div>
    );
};

export default User;