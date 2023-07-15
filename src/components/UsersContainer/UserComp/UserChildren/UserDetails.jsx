import React from 'react';

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website} = user;

    return (
        <>
            <h2>{name}</h2>
            <p><b>User ID:</b> {id}</p>
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Website:</b> {website}</p>
        </>
    );
};

export default UserDetails;