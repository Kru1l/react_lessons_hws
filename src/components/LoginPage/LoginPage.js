import React from 'react';
import styles from './LoginPage.module.css'
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {AppRoutes} from "../../Routing/AppRoutes";

const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onLogin = (data) => {
        reset();
        navigate(AppRoutes.CARS);
        localStorage.setItem('authUser', JSON.stringify({...data, id: 2344}));
    };

    return (
        <div onSubmit={handleSubmit(onLogin)} className={styles.wrap}>
            <div className={styles.login}>
                <form className={styles.form}>
                    <input type="text" placeholder={'Email'} {...register('email',
                        {required: true})}/>
                    {errors.email && <span>This field is required</span>}

                    <input type="text" placeholder={'Password'} {...register('password',
                        {required: true})}/>
                    {errors.password && <span>This field is required</span>}

                    <button type={"submit"}>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;