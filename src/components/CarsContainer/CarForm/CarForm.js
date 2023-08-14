import React, {useEffect} from 'react';
import styles from './CarForm.module.css'
import {useForm} from "react-hook-form";
import {CarsServices} from "../../../services/apiCalls";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarFormValidator} from "../../../validators/CarFormValidator";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        reset
    } = useForm({
        mode: "all",
        resolver: joiResolver(CarFormValidator)
    });


    const onSubmit = (data) => {
        CarsServices.createCar(data, setOnSave, reset)
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const onUpdate = (data) => {
        CarsServices.updateCar(data, carForUpdate, setOnSave, setCarForUpdate, reset);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? onUpdate : onSubmit)}
                  className={styles.form}>
                <input type="text" placeholder={'Brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type="number" placeholder={'Price'} {...register('price',
                    {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}

                <input type="number" placeholder={'Year'} {...register('year',
                    {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}

                <button className={styles.button}>
                    {carForUpdate ? 'Update' : 'Save'}
                </button>
            </form>
        </div>
    );
};

export default CarForm;