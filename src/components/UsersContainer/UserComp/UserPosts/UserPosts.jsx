import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const UserPosts = ({user: {id}}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [id]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;