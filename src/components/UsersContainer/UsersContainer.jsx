import React, {useEffect, useState} from 'react';
import UserComp from "./UserComp/UserComp";

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, []);

    return (
        <>
            {users?.map(user => {
                return (
                    <UserComp key={user.id} user={user}/>
                )
            })}
        </>
    );
};

export default UsersContainer;