import React from "react";

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    return (

        <div>
            <hr/>
            <p><b>UserID:</b> {userId}</p>
            <p><b>PostID:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default Post;