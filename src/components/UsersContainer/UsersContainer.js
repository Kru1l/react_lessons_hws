import React, {useState} from 'react';
import Users from "./Users/Users";
import UserForm from "./UserForm/UserForm";
import {Outlet} from "react-router";

const UsersContainer = () => {
    const [onSave, setOnSave] = useState(null)

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Outlet/>
            <UserForm onSave={onSave} setOnSave={setOnSave}/>
            <Users onSave={onSave} setOnSave={setOnSave}/>
        </div>
    );
};

export default UsersContainer;