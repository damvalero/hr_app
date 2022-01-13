import React, { useState } from 'react';

import './Form.css';
import validate from '../components/ValidateForm'

const Form = () => {
    const [enteredValue, setEnteredValue] = useState({
        firstname: "",
        lastname: "",
        age: "",
        position: "",
    });

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setEnteredValue({
            ...enteredValue,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h1 className='align-title form-title'>Add Coworker</h1>
            <div className='inputs-container'>
                <input
                    id="firstname"
                    placeholder='Firstname'
                    type="text"
                    name="firstname"
                    className='form-input'
                    value={enteredValue.name}
                    onChange={changeHandler}
                    maxLength="50"
                />
                <input
                    id="lastname"
                    placeholder='Lastname'
                    type="text"
                    name="lastname"
                    className='form-input'
                    value={enteredValue.lastname}
                    onChange={changeHandler}
                    maxLength="50"
                />
                <input
                    id="age"
                    placeholder='Age'
                    type="text"
                    name="age"
                    className='form-input'
                    value={enteredValue.age}
                    onChange={changeHandler}
                    maxLength="10"
                />
                <input
                    id="position"
                    placeholder='Position'
                    type="text"
                    name="position"
                    className='form-input'
                    value={enteredValue.position}
                    onChange={changeHandler}
                    maxLength="50"
                />
                <button className='btn-submit' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;