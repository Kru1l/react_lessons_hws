import styles from './PostsComponent.module.css';

const PostsComponent = ({title, id, userId, body, handleClick}) => {

    return (
        <div className={styles.wrap}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <button onClick={() => handleClick(body)}>More Info</button>
        </div>
    )
}

export default PostsComponent;