import React from 'react';
import UserComp from "./UserComp/UserComp";

const UsersComponent = ({users}) => {
    return (
        <>
            {users.map(user => <UserComp key={user.id} user={user}/>)}
        </>
    );
};

export default UsersComponent;