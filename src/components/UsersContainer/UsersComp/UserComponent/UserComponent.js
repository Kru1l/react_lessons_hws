import React from 'react';
import styles from './UserComponent.module.css'
const UserComponent = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div className={styles.wrap}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserComponent;