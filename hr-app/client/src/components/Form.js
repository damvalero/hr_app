import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

import './Form.scss';

const Form = (props) => {
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     defaultValues: {
    //         firstname: "",
    //         lastname: "",
    //         // gender: "male",
    //         age: "",
    //         position: ""
    //     }
    // });
    const [enteredText, setEnteredText] = useState({
        firstname: "", lastname: "", age: "", position: ""
    });

    const handleChange = (e) => {
        setEnteredText({ ...enteredText, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newEmployee = {
            id: Math.random(),
            image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
            firstname: enteredText.firstname,
            lastname: enteredText.lastname,
            age: enteredText.age,
            position: enteredText.position
        };

        setEnteredText({
            firstname: "", lastname: "", age: "", position: ""
        })

        props.onAddEmployee(newEmployee);
    }

    console.log(enteredText)

    return (
        <form className='form-container'
            // onSubmit={handleSubmit(onSubmit)}
            onSubmit={handleSubmit}
        >
            <h1 className='align-title form-title'>Add Coworker</h1>
            <div className='inputs-container'>
                <input
                    placeholder='Firstname'
                    name="firstname"
                    className='form-input'
                    value={enteredText.name}
                    onChange={handleChange}
                // {...register("firstname", { required: true })}
                />
                {/* {errors.firstname?.type === "required" && <p className='form-error'>*Firstname is required</p>} */}
                <input
                    placeholder='Lastname'
                    name="lastname"
                    className='form-input'
                    value={enteredText.lastname}
                    onChange={handleChange}
                // {...register("lastname", { required: true })}
                />
                {/* {errors.lastname?.type === "required" && <p className='form-error'>*Lastname is required</p>} */}
                {/* <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <input
                    placeholder='Age'
                    name="age"
                    className='form-input'
                    value={enteredText.age}
                    onChange={handleChange}
                // {...register("age", { required: true })}
                />
                {/* {errors.age?.type === "required" && <p className='form-error'>*Age is required</p>} */}
                <input
                    placeholder='Position'
                    name="position"
                    className='form-input'
                    value={enteredText.position}
                    onChange={handleChange}
                // {...register("position", { required: true })}
                />
                {/* {errors.position?.type === "required" && <p className='form-error'>*Position is required</p>} */}
                <button className='btn-submit' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;