const PostDetails = ({post}) => {
    const {userId, id, body} = post;

    return (
        <>
            <p><b>UserID</b>: {userId}</p>
            <p><b>PostID</b>: {id}</p>
            <p><b>Body</b>: "{body}"</p>
        </>
    );
};

export default PostDetails;