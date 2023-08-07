import React, {useEffect, useState} from 'react';
import Car from "./Car/Car";

const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(res => res.json())
            .then(cars => setCars(cars))
            .catch()
    }, [onSave]);

    return (
        <>
            {cars.map(car => <Car
                key={car.id} car={car}
                setOnSave={setOnSave}
                setCarForUpdate={setCarForUpdate}
            />)}
        </>
    );
};

export default Cars;