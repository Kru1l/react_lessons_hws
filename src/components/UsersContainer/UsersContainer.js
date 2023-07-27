import React, {useState} from 'react';
import UsersComp from "./UsersComp/UsersComp";
import UserForm from "./UserForm/UserForm";

const UsersContainer = () => {
    const [onSave, setOnSave] = useState(null);

    return (
        <>
            <UserForm setOnSave={setOnSave}/>
            <UsersComp onSave={onSave}/>
        </>
    )
}

export default UsersContainer;