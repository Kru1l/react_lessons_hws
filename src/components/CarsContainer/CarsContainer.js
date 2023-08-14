import React, {useState} from 'react';
import Cars from "./Cars/Cars";
import CarForm from "./CarForm/CarForm";

const CarsContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <>
            <CarForm setOnSave={setOnSave}
                     carForUpdate={carForUpdate}
                     setCarForUpdate={setCarForUpdate}/>
            <Cars onSave={onSave}
                  setOnSave={setOnSave}
                  setCarForUpdate={setCarForUpdate}/>
        </>
    );
};

export default CarsContainer;