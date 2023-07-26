import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent/UserComponent";

const UsersComp = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
            .catch()
    }, [])

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComp;