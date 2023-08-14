import React, {useState} from 'react';
import Users from "./Users/Users";
import UserForm from "./UserForm/UserForm";
import CommentForm from "./CommentForm/CommentForm";
import Comments from "./Comments/Comments";

const UsersContainer = () => {
    const [onSave, setOnSave] = useState(null)

    return (
        <>
            {/*<UserForm onSave={onSave} setOnSave={setOnSave}/>*/}
            {/*<Users onSave={onSave} setOnSave={setOnSave}/>*/}

            <CommentForm onSave={onSave} setOnSave={setOnSave}/>
            <Comments onSave={onSave} setOnSave={setOnSave}/>
        </>
    );
};

export default UsersContainer;