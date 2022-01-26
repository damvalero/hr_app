import React, { useState, useReducer } from 'react';

// import Form from '../components/Form';
import '../components/Form.scss';
// import { validate } from '../components/FormValidations';

// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE':
//             return {
//                 ...state,
//                 // val will be the new value of the input
//                 value: action.val,
//                 isValid: validate(action.val, action.validators)
//             };
//         case 'TOUCH':
//             return {
//                 ...state,
//                 isTouched: true
//             }
//         default:
//             return state;
//     }
// }
const UPDATE_FORM = "UPDATE_FORM"
const RESTART_FORM = "RESTART_FORM";
const initialState = {
    firstname: { value: "", touched: false, hasError: true, error: "" },
    lastname: { value: "", touched: false, hasError: true, error: "" },
    age: { value: "", touched: false, hasError: true, error: "" },
    position: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
}

const validateInput = (input, value) => {
    let hasError = false,
        error = ""
    switch (input) {
        case "firstname":
            if (value.trim() === "") {
                hasError = true
                error = "*Firstame cannot be empty"
            }
            // else if (!/^[a-zA-Z ]+$/.test(value)) {
            //   hasError = true
            //   error = "Invalid Name. Avoid Special characters"
            // } 
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
            // else if (!/^[a-zA-Z ]+$/.test(value)) {
            //   hasError = true
            //   error = "Invalid Name. Avoid Special characters"
            // } 
            else {
                hasError = false
                error = ""
            }
            break
        case "age":
            if (value.trim() === "") {
                hasError = true
                error = "*Age cannot be empty"
            }
            // else if (!/^[a-zA-Z ]+$/.test(value)) {
            //   hasError = true
            //   error = "Invalid Name. Avoid Special characters"
            // } 
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
            // else if (!/^[a-zA-Z ]+$/.test(value)) {
            //   hasError = true
            //   error = "Invalid Name. Avoid Special characters"
            // } 
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
    // console.log('the action is:', action);
    // return { ...state, [action.input]: action.value }
    switch (action.type) {
        case UPDATE_FORM:
            const { input, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                // update the state of the particular field,
                // by retaining the state of other fields
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
    // console.log('the state is:', state);

    const [showError, setShowError] = useState(false);

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
            console.log("item in the for is:", item)
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
            //Logic to submit the form to backend
            console.log("submit form is valid");
            const newEmployee = {
                id: Math.random(),
                image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
                firstname: state.firstname.value,
                lastname: state.lastname.value,
                age: state.age.value,
                position: state.position.value,
            }
            
            const restartForm = {type: RESTART_FORM}
            
            console.log("que muestra dispatch",dispatch(restartForm));
            
            dispatch(restartForm)

            props.onAddEmployee(newEmployee);
        }


        // setErrors(validate(enteredText));
        // if(errors) {
        //     console.log("que es errors",errors)
        // }

        // console.log("length del objetp", Object.keys(errors).length === 0)

        // if (Object.keys(errors).length === 0) {
        //     console.log(enteredText);
        //     const newEmployee = {
        //         id: Math.random(),
        //         image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
        //         firstname: enteredText.firstname,
        //         lastname: enteredText.lastname,
        //         age: enteredText.age,
        //         position: enteredText.position
        //     };

        //     setEnteredText({
        //         firstname: "", lastname: "", age: "", position: ""
        //     })

        //     props.onAddEmployee(newEmployee);
        // }
    }
    // const touchInput = () => {
    //     dispatch({
    //         type: 'TOUCH',
    //     })
    // }

    return (
        <div className='page-margin'>
            <div className='page-space'>
                {/* <Form /> */}
                <form className='form-container'
                    // onSubmit={handleSubmit(onSubmit)}
                    onSubmit={handleSubmit}>
                    <h1 className='align-title form-title'>Add Coworker</h1>
                    <div className='inputs-container'>
                        <input
                            placeholder='Firstname'
                            name="firstname"
                            className='form-input'
                            // value={enteredText.firstname}
                            // value={inputState.value}
                            // onBlur={touchInput}
                            value={state.firstname.value}
                            onChange={handleChange}
                        // {...register("firstname", { required: true })}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.firstname.error}</p>
                        )}
                        {/* {!inputState.isValid && inputState.isTouched && <p className='form-error'>*Firstname is required</p>} */}
                        {/* {errors.firstname && <p className='form-error'>*Firstname is required</p>} */}
                        <input
                            placeholder='Lastname'
                            name="lastname"
                            className='form-input'
                            // value={enteredText.lastname}
                            // value={inputState.value}
                            // onBlur={touchInput}
                            value={state.lastname.value}
                            onChange={handleChange}
                        // {...register("lastname", { required: true })}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.lastname.error}</p>
                        )}
                        {/* {!inputState.isValid && <p className='form-error'>*Lastname is required</p>} */}
                        {/* {errors.lastname && <p className='form-error'>*Lastname is required</p>} */}
                        {/* <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select> */}
                        <input
                            placeholder='Age'
                            name="age"
                            className='form-input'
                            // value={enteredText.age}
                            // value={inputState.value}
                            // onBlur={touchInput}
                            value={state.age.value}
                            onChange={handleChange}
                        // {...register("age", { required: true })}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.age.error}</p>
                        )}
                        {/* {!inputState.isValid && <p className='form-error'>*Age is required</p>} */}
                        {/* {errors.age && <p className='form-error'>*Age is required</p>} */}
                        <input
                            placeholder='Position'
                            name="position"
                            className='form-input'
                            // value={enteredText.position}
                            // value={inputState.value}
                            // onBlur={touchInput}
                            value={state.position.value}
                            onChange={handleChange}
                        // {...register("position", { required: true })}
                        />
                        {showError && !state.isFormValid && (
                            <p className='form-error'>{state.position.error}</p>
                        )}
                        {/* {!inputState.isValid && <p className='form-error'>*Position is required</p>} */}
                        {/* {errors.position && <p className='form-error'>*Position is required</p>} */}
                        <button className='btn-submit' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewEmployeePage;