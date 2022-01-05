import React from 'react';

import EmployeeItem from '../components/EmployeeItem';

const EmployeesPage = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='center'>
                <p className='text-message'>Start to fill your database.</p>
            </div>
        )
    }

    return (
        <>
            <h1 className='title-site'>Say Hi to all your coworkes</h1>
            <ul>
                helloooo {props.items.map(employee => {
                    return employee.name
                })}
                {props.items.map(employee => {
                    return <EmployeeItem
                        key={employee.id}
                        image={employee.image}
                        name={employee.name}
                        lastname={employee.lastname}
                    />
                })}
            </ul>
        </>
    )
}

export default EmployeesPage;