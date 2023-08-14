import React, {useEffect, useState} from 'react';
import {UsersServices} from "../../../services/apiCalls";
import User from "./User/User";

const Users = ({onSave, setOnSave}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        UsersServices.getUsers(setUsers, setOnSave)
    }, [onSave]);

    return (
        <>
            {users.map(user => <User
                key={user.id}
                user={user}/>
            )}
        </>
    );
};

export default Users;