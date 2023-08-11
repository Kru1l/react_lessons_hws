import {Endpoints, baseURL} from "../api/endpoints";
import axios from "axios";

const apiCalls = {
    getCars: async (setCars) => {
    // carsApiCall: (setCars) => {
    //     fetch(baseURL + Endpoints.CARS)
    //         .then(res => res.json())
    //         .then(cars => setCars(cars))
    //         .catch()

        try {
            const cars = await axios.get(baseURL + Endpoints.CARS);
            setCars(cars.data)
        } catch (error) {
            console.error(error)
        }
    },
    deleteCar: (setOnSave, id) => {
        // Endpoints.baseURL + Endpoints.CARS + id
        // fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,

        // await fetch(baseURL + Endpoints.CARS + `/${id}`,
        //     {method: 'DELETE'})
        //     .then(() => setOnSave(prev => !prev))
        //     .catch()

        axios.delete(baseURL + Endpoints.CARS + `/${id}`)
            .then(() => setOnSave(prev => !prev))
            .catch()

    },
    postCar: (data, setOnSave, reset) => {
        // fetch(baseURL + Endpoints.CARS, {
        //     headers: {'content-type': 'application/json'},
        //     body: JSON.stringify(data),
        //     method: 'POST'
        // }).then(() => {
        //     setOnSave(prev => !prev)
        //     reset()
        // }).catch()

        axios.post(baseURL + Endpoints.CARS, data)
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            }).catch()
    },
    updateCar: (car, setOnSave, carForUpdate, setCarForUpdate, reset) => {
        // fetch(baseURL + Endpoints.CARS + `/${carForUpdate.id}`, {
        //     headers: {'content-type': 'application/json'},
        //     body: JSON.stringify(car),
        //     method: 'PUT'
        // }).then(() => {
        //     setOnSave(prev => !prev)
        //     setCarForUpdate(null)
        //     reset()
        // }).catch()

        axios.put(baseURL + Endpoints.CARS + `/${carForUpdate.id}`, car)
            .then(() => {
                setOnSave(prev => !prev);
                setCarForUpdate(null);
                reset();
            }).catch()
    }
}

export {apiCalls};