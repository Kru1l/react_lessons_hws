import React, {useEffect, useState} from 'react';
import {CarsServices} from "../../../services/apiCalls";
import Car from "./Car/Car";

const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarsServices.getCars(setCars);
    }, [onSave]);

    return (
        <>
            {cars.map(car => <Car key={car.id}
                                  car={car}
                                  setOnSave={setOnSave}
                                  setCarForUpdate={setCarForUpdate}
            />)}
        </>
    );
};

export default Cars;