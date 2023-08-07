import React, {useState} from 'react';
import styles from './Car.module.css'

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    // const [values, setValues] = useState({
    //     brand: '',
    //     price: null,
    //     year: null
    // })

    const handleDelete = (data) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {method: 'DELETE'})
            .then(() => setOnSave(prev => !prev))
            .catch()
    }

    return (
        <>
            <div className={styles.data}>
                <p>Car ID: {id}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>

                <button className={styles.button} onClick={() => setCarForUpdate(car)}>
                    Update
                </button>

                <button className={styles.button} onClick={() => handleDelete()}>
                    Delete
                </button>

            </div>
        </>
    );
};

export default Car;