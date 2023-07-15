import React from 'react';
import styles from './UserComp.module.css';
import UserDetails from "./UserChildren/UserDetails";
import UserAddress from "./UserChildren/UserAddress";
import UserCompany from "./UserChildren/UserCompany";

const UserComp = ({user}) => {
    return (
        <div className={styles.UserComp}>
            <UserDetails user={user}/>
            <UserAddress userAddress={user.address}/>
            <UserCompany userCompany={user.company}/>
        </div>
    );
};

export default UserComp;