import React from 'react';
import styles from './User.module.css'

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div className={styles.data}>
            <p><b>User ID:</b> {id}</p>
            <p><b>User Name:</b> {name}</p>
            <p><b>Username:</b> {username}</p>
        </div>
    );
};

export default User;