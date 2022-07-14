import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({getUsers}) => {
    const {register , handleSubmit  ,reset , formState: { errors } } = useForm()

    const submit = data => {
		axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then( () => getUsers() )
        reset(defaultValues)
        
    }

    const defaultValues = {
            birthday: "",
            email: "",
            first_name: "",
            last_name: "",
            password: ""
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="form">
            <div className="input-container">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder='first name' id='first_name' {...register("first_name" ,{ required: true })} />
                <input type="text" placeholder='last name' id='last_name' {...register("last_name")}/>
            </div>
         
            <div className="input-container">
                <i className='bx bx-envelope' ></i>
                <input type="email" placeholder='email' id='email' {...register("email")}/>
            </div>
            <div className="input-container">
                <i className='bx bxs-edit-alt'></i>
                <input type="password" placeholder='password' id='password' {...register("password")}/>
            </div>
            <div className="input-container">
                <i className="bx bxs-gift"></i>
                <input type="date" id='birthday' {...register("birthday")}/>
            </div>
            <button className='create'>Create</button>
            {errors.first_name?.type === 'required' && <span className='error'>First names is required</span> }
        </form>
    );
};

export default UsersForm;

// birthday: "0001-07-12"
// email: "danielrodriguezzdiazz@gmail.com"
// first_name: "Daniel"
// id: 6815
// last_name: "Rodriguez"
// password: "jsjsjs"