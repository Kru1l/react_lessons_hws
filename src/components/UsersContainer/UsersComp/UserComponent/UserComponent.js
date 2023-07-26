import React from 'react';
import styles from './UserComponent.module.css'
const UserComponent = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div className={styles.wrap}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

export default UserComponent;