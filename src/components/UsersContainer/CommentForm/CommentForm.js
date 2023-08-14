import React from 'react';
import styles from './CommentForm.module.css'
import {useForm} from "react-hook-form";
import {CommentsServices} from "../../../services/apiCalls";

const CommentForm = ({onSave, setOnSave}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onSubmit = (data) => {
        CommentsServices.createComment(data, setOnSave, reset)
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input placeholder={'PostId'} {...register('postId',
                    {required: true})}/>
                {errors.postId && <span>This field is required</span>}

                <input placeholder={'Name'} {...register('name',
                    {required: true})}/>
                {errors.name && <span>This field is required</span>}

                <input placeholder={'Email'} {...register('email',
                    {required: true})}/>
                {errors.email && <span>This field is required</span>}

                <input placeholder={'Body'} {...register('body',
                    {required: true})}/>
                {errors.body && <span>This field is required</span>}

                <button className={styles.button}>Save</button>
            </form>
        </div>
    );
};

export default CommentForm;