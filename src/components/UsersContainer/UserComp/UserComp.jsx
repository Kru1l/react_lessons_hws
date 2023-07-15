import React, {useContext} from 'react';
import styles from './UserComp.module.css';
import {UsersContext} from "../UsersContainer";


const UserComp = () => {
    const {users} = useContext(UsersContext);
    // console.log(UsersContext.users);

    return (
        <div className={styles.UserComp}>
            {/*{users?.map(user => {*/}
            {/*    return (*/}
            {/*    console.log(user)*/}
            {/*    )*/}
            {/*})}*/}

        </div>
    );
};

export default UserComp;