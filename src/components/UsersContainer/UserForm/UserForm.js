import React from 'react';
import {useForm} from "react-hook-form";
import styles from './UserForm.module.css'

const UserForm = ({setOnSave}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        }).then(user => user.json())
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div><label>
                    <input type={"text"} placeholder={'Name'} {...register('name', {
                        required: true
                    })}/>
                </label></div>
                {errors.name && <span>This field is required</span>}

                <div><label>
                    <input type={"text"} placeholder={'UserName'} {...register('username', {
                        required: true
                    })}/>
                </label></div>
                {errors.username && <span>This field is required</span>}

                <div><label>
                    <input type={"text"} placeholder={'Email'} {...register('email', {
                        required: true
                    })}/>
                </label></div>
                {errors.email && <span>This field is required</span>}

                <div><label>
                    <input className={styles.button} type={"submit"} value={'Save'}/>
                </label></div>
            </form>
        </div>
    );
};

export default UserForm;