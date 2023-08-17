import React, {useEffect, useState} from 'react';
import {CommentsServices} from "../../../services/apiCalls";
import Comment from "./Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {
    const [onSave, setOnSave] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsServices.getComments(setComments, setOnSave)
    }, [onSave]);
    // console.log(comments)
    return (
        <div style={{display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'}}>

            <CommentForm onSave={onSave} setOnSave={setOnSave}/>
            {comments.map(comment => <Comment
                key={comment.id}
                comment={comment}/>
            )}
        </div>
    );
};

export default Comments;