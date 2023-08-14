import React from 'react';
import styles from './Car.module.css';
import {CarsServices} from "../../../../services/apiCalls";

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const handleDelete = () => {
        CarsServices.deleteCar(id, setOnSave)
    }

    return (
        <div className={styles.data}>
            <p><b>Car ID:</b> {id}</p>
            <p><b>Brand:</b> {brand}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Year:</b> {year}</p>

            <button onClick={() => setCarForUpdate(car)} className={styles.button}>
                Update<
                /button>

            <button onClick={() => handleDelete()} className={styles.button}>
                Delete
            </button>
        </div>
    );
};

export default Car;