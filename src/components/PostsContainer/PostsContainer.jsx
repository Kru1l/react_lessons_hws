import PostsComponent from "./PostsComponent/PostsComponent";
import {useEffect, useState} from "react";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch();
    }, []);

    const handleClick = (value) => {
        setInfo(value.body);
        console.log(info)
    }

    return (
        <>
            {posts.map((post, id) => {

                return (
                    <PostsComponent key={id}
                                    userId={post.userId}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                    handleClick={handleClick}
                    />
                )
            })}

        </>
    )
}

export default PostsContainer;