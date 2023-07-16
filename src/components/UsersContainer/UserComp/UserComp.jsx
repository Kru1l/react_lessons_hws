import React, {useState} from 'react';
import styles from './UserComp.module.css';
import UserPosts from "./UserPosts/UserPosts";


const UserComp = ({user}) => {
    const {id, name} = user;
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.UserComp}>
            <h3>User ID: {id}</h3>
            <h3>Name: {name}</h3>
            <button onClick={() => setIsShow(prev => !prev)}>
                {isShow ? 'Hide' : 'Get Posts'}
            </button>

            {isShow && <UserPosts user={user}/>}

        </div>
    );
}
export default UserComp;