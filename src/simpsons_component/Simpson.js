import styles from './Simpson.module.css';

const Simpson = ({FirstName, LastName, age, photo}) => {

    return (
        <div className={styles.member}>

            <h3>{FirstName} {LastName} - {age}</h3>
            <img src={photo} alt={FirstName}/>


        </div>
    )
}

export default Simpson;