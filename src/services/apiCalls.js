import {Endpoints, baseURL} from '../api/endpoints';
import {baseCarsURL, CarsEndpoints} from "../api/carsEndpoints";
import axios from "axios";

const UsersServices = {
    getUsers: async (setUsers) => {
        try {
            const users = await
                axios.get(baseURL + Endpoints.USERS)
            setUsers(users.data)
        } catch (e) {
            console.error(e)
        }
    },
    createUser: (data, setOnSave, reset) => {
        axios.post(baseURL + Endpoints.USERS, data)
            .then(() => {
                setOnSave(prev => !prev);
                reset()
            })
    }
}

const CommentsServices = {
    getComments: async (setComments) => {
        try {
            const comments = await
                axios.get(baseURL + Endpoints.COMMENTS);
            setComments(comments.data)
        } catch (e) {
            console.error(e)
        }
    },
    createComment: (data, setOnSave, reset) => {
        axios.post(baseURL + Endpoints.COMMENTS, data)
            .then(() => {
                console.log(data.status)
                setOnSave(prev => !prev)
                reset()
            })
    }
}

const CarsServices = {
    getCars: async (setCars) => {
        try {
            const res = await
                axios.get(baseCarsURL + CarsEndpoints.CARS);
            setCars(res.data)
        } catch (e) {
            console.error(e)
        }
    },
    createCar: (data, setOnSave, reset) => {
        axios.post(baseCarsURL + CarsEndpoints.CARS, data)
            .then(() => {
                setOnSave(prev => !prev);
                reset();
            }).catch((e) => console.error(e))
    },
    updateCar: (data, carForUpdate, setOnSave, setCarForUpdate, reset) => {
        axios.put(baseCarsURL + CarsEndpoints.CARS + `/${carForUpdate.id}`, data)
            .then(() => {
                setOnSave(prev => !prev);
                setCarForUpdate(null)
                reset()
            }).catch((e) => console.error(e))
    },
    deleteCar: (id, setOnSave) => {
        axios.delete(baseCarsURL + CarsEndpoints.CARS + `/${id}`)
            .then(() => {
                setOnSave(prev => !prev)
            })
    }
}

export {
    UsersServices,
    CommentsServices,
    CarsServices
};