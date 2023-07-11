import PostComponent from "./PostComponent/PostComponent";
import {useEffect, useState} from "react";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);
    // const [info, setInfo] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch();
    }, []);

    return (
        <>
            {posts.map((post, id) => {

                return (
                    <PostComponent key={id} post={post}/>
                )
            })}
        </>
    )
}

export default PostsContainer;