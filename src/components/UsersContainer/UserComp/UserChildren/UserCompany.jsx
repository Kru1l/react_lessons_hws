import React from 'react';

const UserCompany = ({userCompany}) => {
    const {name, catchPhrase, bs} = userCompany;
    return (
        <>
            <h3>Company:</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>CatchPhrase:</b> {catchPhrase}</p>
            <p><b>Bs:</b> {bs}</p>
        </>
    );
};

export default UserCompany;