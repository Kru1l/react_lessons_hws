import styles from './PostComponent.module.css';
import {useState} from "react";
import PostDetails from "./PostDetails/PostDetails";

const PostComponent = ({post}) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.wrap}>
            <p><b>ID:</b> {post.id}</p>
            <p><b>Title:</b> "{post.title}"</p>
            <button onClick={() => setIsShow(prev => !prev)}>
                {isShow ? 'Hide' : 'Show More Info'}
            </button>

            {isShow && <PostDetails post={post}/>}

        </div>
    )
}

export default PostComponent;