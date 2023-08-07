import React, {useEffect} from 'react';
import styles from './CarForm.module.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carFormValidator} from "../../../validators/carFormValidator";
import Joi from "joi";
import car from "../Cars/Car/Car";

const CarForm = ({setOnSave, setCarForUpdate, carForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({
        mode: "all",
        resolver: joiResolver(carFormValidator)
    });

    // const setFormValues = () => {
    //     setValue('brand', 'Audi', {shouldValidate: true});
    //     setValue('price', 6000, {shouldValidate: true});
    //     setValue('year', 2012, {shouldValidate: true});
    // };

    const onSubmit = (data => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        }).then(() => {
            setOnSave(prev => !prev)
            reset()
        }).catch()
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const onUpdate = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'PUT'
        }).then(() => {
            setOnSave(prev => !prev)
            setCarForUpdate(null)
            reset()
        }).catch()
    }

    // console.log(errors);

    return (
        <div>
            <form className={styles.form}
                  onSubmit={handleSubmit(!carForUpdate ? onSubmit : onUpdate)}>
                <label>
                    <input type="text" placeholder={'Brand'} {...register('brand', {
                        // required: true,
                        // maxLength: 25,
                        // pattern: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/
                    })}/>
                </label>
                {errors.brand && <span>{errors.brand.message}</span>}

                <label>
                    <input type="text" placeholder={'Price'} {...register('price', {
                        valueAsNumber: true
                        // required: {value: true, message: 'This field is required'},
                        // min: {value: 0, message: 'Not less than 0'},
                        // max: {value: 1000000, message: 'Not more than 1000000'},
                    })}/>
                </label>
                {errors.price && <span>{errors.price.message}</span>}

                <label>
                    <input type="text" placeholder={'Year'} {...register('year', {
                        valueAsNumber: true
                        // required: true,
                        // min: 1990,
                        // max: new Date().getFullYear()
                    })}/>
                </label>
                {errors.year && <span>{errors.year.message}</span>}

                <button disabled={!isValid} className={styles.button}>
                    {carForUpdate ? 'Update' : 'Save'}
                </button>

            </form>
        </div>
    );
};

export default CarForm;