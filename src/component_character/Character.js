import styles from './Character.module.css'

const Character = ({id, name, status, species, gender, image}) => {

    return (
        <div className={styles.person}>
            <h2>{name}</h2>

            <div className={styles.text}>
                <p>id: {id}</p>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
            </div>

            <img src={image} alt={name}/>


        </div>
    )
}

export default Character;