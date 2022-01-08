import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

import "./EmployeeItem.css";


const EmployeeItem = (props) => {
    return (
        <li className='card-container'>
            <div className='card-img'>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='card-text'>
                <div className='card-name'>
                    <p>{props.name}</p>
                    <p>{props.lastname}</p>
                </div>
                <p className='card-position'>{props.position}</p>
            </div>
            <div className='card-buttons'>
                
                <a href className='edit-icon'>
                    <FontAwesomeIcon className='icontest' size='lg' icon={faEdit} />
                </a>
                <button className='delete-icon'>
                    <FontAwesomeIcon size='lg' icon={faTimes} />
                </button>
            </div>
        </li>
    );
};

export default EmployeeItem;