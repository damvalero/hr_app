import React from 'react';

import './Button.scss'

const Button = (props) => {
    if (props.type === 'button') {
        return <button className='btn-form-image' type="button" onClick={props.onClick}>PICK PHOTO</button>
    }

    return (
        <button className='btn-submit' type="submit">Submit</button>
    )
};

export default Button;
