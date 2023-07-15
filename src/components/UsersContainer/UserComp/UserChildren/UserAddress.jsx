import React from 'react';

const UserAddress = ({userAddress}) => {
    const {street, suite, city} = userAddress;
    return (
        <>
            <h3>Address:</h3>
            <p><b>Street:</b> {street}</p>
            <p><b>Suite:</b> {suite}</p>
            <p><b>City:</b> {city}</p>
        </>
    );
};

export default UserAddress;