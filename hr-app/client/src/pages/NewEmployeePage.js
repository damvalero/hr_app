import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

// import ImageUpload from '../components/ImageUpload';
import Button from '../components/Button';
import './NewEmployeePage.scss';

const UPDATE_FORM = "UPDATE_FORM"
const RESTART_FORM = "RESTART_FORM";
const initialState = {
    name: { value: "", touched: false, hasError: true, error: "" },
    lastname: { value: "", touched: false, hasError: true, error: "" },
    age: { value: "", touched: false, hasError: true, error: "" },
    position: { value: "", touched: false, hasError: true, error: "" },
    gender: { value: "", touched: false, hasError: true, error: "" },
    civil: { value: "", touched: false, hasError: true, error: "" },
    address: { value: "", touched: false, hasError: true, error: "" },
    highestDegree: { value: "", touched: false, hasError: true, error: "" },
    profession: { value: "", touched: false, hasError: true, error: "" },
    experience: { value: "", touched: false, hasError: true, error: "" },
    languages: { value: "", touched: false, hasError: true, error: "" },

    isFormValid: false,
}

const validateInput = (input, value) => {
    let hasError = false,
        error = ""
    switch (input) {
        case "name":
            if (value.trim() === "") {
                hasError = true
                error = "*Firstame cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "lastname":
            if (value.trim() === "") {
                hasError = true
                error = "*Lastname cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "image":
            break
        case "age":
            if (value.trim() === "") {
                hasError = true
                error = "*Age cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "position":
            if (value.trim() === "") {
                hasError = true
                error = "*Position cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "gender":
            if (value.trim() === "") {
                hasError = true
                error = "*Gender cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "civil":
            if (value.trim() === "") {
                hasError = true
                error = "*Civil cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "address":
            if (value.trim() === "") {
                hasError = true
                error = "*Address cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "highestDegree":
            if (value.trim() === "") {
                hasError = true
                error = "*Highest Degree cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "profession":
            if (value.trim() === "") {
                hasError = true
                error = "*Profession cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "experience":
            if (value.trim() === "") {
                hasError = true
                error = "*Experience cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        case "languages":
            if (value.trim() === "") {
                hasError = true
                error = "*Language cannot be empty"
            }
            else {
                hasError = false
                error = ""
            }
            break
        default:
            break
    }
    return { hasError, error }
}

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_FORM:
            const { input, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                [input]: { ...state[input], value, hasError, error, touched },
                isFormValid,
            }
        case RESTART_FORM:
            return initialState
        default:
            return state
    }
}

const NewEmployeePage = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const history = useHistory()
    const [showError, setShowError] = useState(false);

    // const inputImageName= "image";

    const handleChange = (e) => {
        const input = e.target.name;
        const value = e.target.value;

        const { hasError, error } = validateInput(input, value)
        let isFormValid = true

        for (const key in state) {
            const item = state[key]
            // Check if the current field has error
            if (key === input && hasError) {
                isFormValid = false
                break
            } else if (key !== input && item.hasError) {
                // Check if any other field has error
                isFormValid = false
                break
            }
        }
        const action = {
            type: UPDATE_FORM,
            data: {
                input: input, value: value, hasError: false, error: "", isFormValid: true,
            }
        }
        dispatch(action);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isFormValid = true

        for (const input in state) {
            const item = state[input]
            const { value } = item
            const { hasError, error } = validateInput(input, value)
            if (hasError) {
                isFormValid = false
            }
            if (input) {
                dispatch({
                    type: UPDATE_FORM,
                    data: {
                        input,
                        value,
                        hasError,
                        error,
                        touched: true,
                        isFormValid,
                    },
                })
            }
        }
        if (!isFormValid) {
            setShowError(true)
        } else {
            const newEmployee = {
                // id: Math.random(),
                name: state.name.value,
                lastname: state.lastname.value,
                age: state.age.value,
                position: state.position.value,
                gender: state.gender.value,
                civil: state.civil.value,
                address: state.address.value,
                highestDegree: state.highestDegree.value,
                profession: state.profession.value,
                experience: state.experience.value,
                languages: state.languages.value,
            }

            // image are binary data, for data reason is 
            // necessary formData already have it he navigator
            // const formData = new FormData();
            // formData.append('name', state.name.value);
            // formData.append('lastname', state.lastname.value);
            // formData.append('age', state.age.value);
            // formData.append('position', state.position.value);
            // formData.append('image', state.image.value);

            const restartForm = { type: RESTART_FORM }

            // console.log("que muestra dispatch", dispatch(restartForm));

            dispatch(restartForm)

            props.onAddEmployee(newEmployee);
            history.push('/')
        }

    }

    return (
        <div className='page-margin'>
            <div className='page-space'>
                <form className='form-container'
                    onSubmit={handleSubmit}>
                    <h1 className='align-title form-title'>Add Coworker</h1>
                    <div className='inputs-container'>
                        <input
                            placeholder='Firstname'
                            name="name"
                            className='form-input'
                            value={state.name.value}
                            onChange={handleChange}
                            maxLength="20"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.name.error}</p>
                        )}
                        <input
                            placeholder='Lastname'
                            name="lastname"
                            className='form-input'
                            value={state.lastname.value}
                            onChange={handleChange}
                            maxLength="20"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.lastname.error}</p>
                        )}
                        <input
                            placeholder='Gender'
                            name="gender"
                            className='form-input'
                            value={state.gender.value}
                            onChange={handleChange}
                            maxLength="10"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.gender.error}</p>
                        )}
                        {/* <ImageUpload name={inputImageName} handleImageChange={handleChange} /> */}
                        <input
                            placeholder='Age'
                            name="age"
                            className='form-input'
                            type="number"
                            value={state.age.value}
                            onChange={handleChange}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.age.error}</p>
                        )}
                        <input
                            placeholder='Civil Status'
                            name="civil"
                            className='form-input'
                            value={state.civil.value}
                            onChange={handleChange}
                            maxLength="20"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.civil.error}</p>
                        )}
                        <input
                            placeholder='Address'
                            name="address"
                            className='form-input'
                            value={state.address.value}
                            onChange={handleChange}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.address.error}</p>
                        )}
                        <input
                            placeholder='Job position'
                            name="position"
                            className='form-input'
                            value={state.position.value}
                            onChange={handleChange}
                            maxLength="30"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.position.error}</p>
                        )}
                        <input
                            placeholder='Highest Degree'
                            name="highestDegree"
                            className='form-input'
                            value={state.highestDegree.value}
                            onChange={handleChange}
                            maxLength="30"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.highestDegree.error}</p>
                        )}
                         <input
                            placeholder='Profession'
                            name="profession"
                            className='form-input'
                            value={state.profession.value}
                            onChange={handleChange}
                            maxLength="30"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.profession.error}</p>
                        )}
                         <input
                            placeholder='Years of experience'
                            name="experience"
                            type="number"
                            className='form-input'
                            value={state.experience.value}
                            onChange={handleChange}
                            maxLength="5"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.experience.error}</p>
                        )}
                        <input
                            placeholder='Languages'
                            name="languages"
                            className='form-input'
                            value={state.languages.value}
                            onChange={handleChange}
                            maxLength="50"
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.languages.error}</p>
                        )}
                        <Button type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewEmployeePage;