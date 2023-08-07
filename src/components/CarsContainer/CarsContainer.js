import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";
import {useState} from "react";

const CarsContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <>
            <CarForm setOnSave={setOnSave}
                     setCarForUpdate={setCarForUpdate}
                     carForUpdate={carForUpdate}/>

            <Cars onSave={onSave}
                  setOnSave={setOnSave}
                  setCarForUpdate={setCarForUpdate}/>
        </>
    )

}

export default CarsContainer;