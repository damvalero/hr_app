import React from 'react';

import EmployeeItem from '../components/EmployeeItem';
import "./EmployeesPage.scss";

const EmployeesPage = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='page-margin align-title'>
                <p className='text-message'>Start to fill your database.</p>
            </div>
        )
    }

    return (
        <div className='page-margin'>
            <h1 className='title-site'>Say Hi to all your coworkes</h1>
            <ul className='employee-list'>
                {props.items.map(employee => {
                    return <EmployeeItem
                        id={employee.id}
                        image={employee.image}
                        firstname={employee.firstname}
                        lastname={employee.lastname}
                        position={employee.position}
                    />
                })}
            </ul>
        </div>
    )
}

export default EmployeesPage;