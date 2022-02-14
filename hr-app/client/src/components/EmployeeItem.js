import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

import "./EmployeeItem.scss";


const EmployeeItem = (props) => {

    const sendDeleteInfo = (e) => {
        e.preventDefault();

        const deleteId = props.id
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/employees/${deleteId}`)
            .then(res => {
                props.deleteDataToParent(deleteId);
            })
            .catch(err => console.log("my error", err));

    }
    return (
        <li className='card-container'>
            {/* <div className='card-img'>
                <img src={props.image} alt={props.name} />
            </div> */}
            <div className='card-text'>
                <Link to={`/employees/${props.id}`}>
                    <div className='card-name'>
                        <p>{props.name}</p>
                        <p>{props.lastname}</p>
                    </div>
                </Link>
                <p className='card-position'>{props.position}</p>
            </div>
            <div className='card-buttons'>

                <Link to={`employees/update/${props.id}`} className='edit-icon'>
                    <FontAwesomeIcon size='lg' icon={faEdit} />
                </Link>
                <button className='delete-icon' onClick={sendDeleteInfo}>
                    <FontAwesomeIcon size='lg' icon={faTimes} />
                </button>
            </div>
        </li>
    );
};

export default EmployeeItem;