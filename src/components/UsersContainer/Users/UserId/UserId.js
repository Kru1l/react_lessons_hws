import React from 'react';
import {useParams} from "react-router";

const UserId = () => {
    const {id} = useParams()
    // console.log(path)

    return (
        <div style={{marginTop: '15px'}}>
            <p><b>User ID: | {id} |</b></p>
        </div>
    );
};

export default UserId;