import React from 'react';
import {useForm} from "react-hook-form";
import styles from './UserForm.module.css';
import {UsersServices} from "../../../services/apiCalls";

const UserForm = ({onSave, setOnSave}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onSubmit = (data) => {
        UsersServices.createUser(data, setOnSave, reset);
    }

    return (
        <div style={{"margin": '15px'}}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'Your Name'} {...register('name',
                    {required: true})}/>
                {errors.name && <span>This field is required</span>}

                <input type="text" placeholder={'Username'} {...register('username',
                    {required: true})}/>
                {errors.username && <span>This field is required</span>}

                <button className={styles.button}>Save</button>
            </form>
        </div>
    );
};

export default UserForm;