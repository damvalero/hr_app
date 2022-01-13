import React from 'react';
import { useForm } from 'react-hook-form';

import './Form.css';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            // gender: "male",
            age: "",
            position: ""
        }
    });

    const onSubmit = (data) => {
        console.log("data", data)
    }

    return (
        <form className='form-container'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className='align-title form-title'>Add Coworker</h1>
            <div className='inputs-container'>
                <input
                    placeholder='Firstname'
                    name="firstname"
                    className='form-input'
                    {...register("firstname", { required: true })}
                />
                {errors.firstname?.type === "required" && <p className='form-error'>*Firstname is required</p>}
                <input
                    placeholder='Lastname'
                    name="lastname"
                    className='form-input'
                    {...register("lastname", { required: true })}
                />
                {errors.lastname?.type === "required" && <p className='form-error'>*Lastname is required</p>}
                {/* <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <input
                    placeholder='Age'
                    name="age"
                    className='form-input'
                    {...register("age", { required: true })}
                />
                {errors.age?.type === "required" && <p className='form-error'>*Age is required</p>}
                <input
                    placeholder='Position'
                    name="position"
                    className='form-input'
                    {...register("position", { required: true })}
                />
                {errors.position?.type === "required" && <p className='form-error'>*Position is required</p>}
                <button className='btn-submit' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;