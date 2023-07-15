import React, {createContext, useEffect, useState} from 'react';
import UserComp from "./UserComp/UserComp";

export const UsersContext = createContext(null);

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, []);

    return (
        <>
            <UsersContext.Provider value={users}>

                <UserComp/>

            </UsersContext.Provider>

        </>
    );
};

export default UsersContainer;