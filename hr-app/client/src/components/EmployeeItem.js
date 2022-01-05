import React from 'react';

const EmployeeItem = (props) => {
    return (
        <li >
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <p>{props.name}</p>
                <p>{props.lastname}</p>
            </div>
        </li>
    );
};

export default EmployeeItem;