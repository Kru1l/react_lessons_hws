import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = () => {
    // const newUser = {
    //     "id": 11,
    //     "name": "Johny Walker",
    //     "username": "Johny",
    //     "email": "Johny@may.jpb",
    //     "address": {
    //         "street": "Bunet Dark",
    //         "suite": "Suite 455",
    //         "city": "Chicago",
    //         "zipcode": "64684-2754",
    //         "geo": {
    //             "lat": "-45.6534",
    //             "lng": "64.4523"
    //         }
    //     },
    //     "phone": "1-770-245-45678 x86544",
    //     "website": "chicago.com",
    //     "company": {
    //         "name": "Johny-Corporation",
    //         "catchPhrase": "Double-layered client-server ai-net",
    //         "bs": "harness real-time alibaba"
    //     },
    // }
    //
    // fetch('https://jsonplaceholder.typicode.com/users' , {
    //     headers: {'content-type':'application/json'},
    //     body: JSON.stringify(newUser),
    //     method: 'POST'})
    //     .then()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div><label> <input type={"text"} placeholder={'Name'}/> </label></div>
                <div><label> <input type={"text"} placeholder={'UserName'}/> </label></div>
                <div><label> <input type={"submit"} value={'Save'}/> </label></div>


            </form>

        </div>
    );
};

export default UserForm;