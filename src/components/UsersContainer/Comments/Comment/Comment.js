import React from 'react';
import styles from './Comment.module.css'

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    return (
        <div className={styles.data}>
            <p><b>Post ID:</b> {postId}</p>
            <p><b>Comment ID:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default Comment;