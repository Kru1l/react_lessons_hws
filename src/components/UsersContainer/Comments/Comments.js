import React, {useEffect, useState} from 'react';
import {CommentsServices} from "../../../services/apiCalls";
import Comment from "./Comment/Comment";


const Comments = ({onSave, setOnSave}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        CommentsServices.getComments(setComments, setOnSave)
    }, [onSave]);
    // console.log(comments)
    return (
        <>
            {comments.map(comment => <Comment
                key={comment.id}
                comment={comment}/>
            )}
        </>
    );
};

export default Comments;