import React from 'react';

import EmployeeItem from '../components/EmployeeItem';
import "./EmployeesPage.scss";

const EmployeesPage = (props) => {
    // if (props.items.length === 0 && !props.isCharging ) {
    //     return (
    //         <div className='page-margin align-title'>
    //             <div className='page-space'>
    //                 <p className='text-message'>Start to fill your database.</p>
    //             </div>
    //         </div>
    //     )
    // }

    // This send the info to Appjs to update the state employees
    const deleteDataToParent = (deleteId) => {
        props.deleteEmployee(deleteId);
    }

    return (
        <div className='page-margin'>
            <h1 className='title-site'>HR Database</h1>
            <ul className='employee-list'>
                {props.items.map(employee => {
                    return <EmployeeItem
                        deleteDataToParent={deleteDataToParent}
                        key={`${props.id}${employee.name}`}
                        id={employee._id}
                        image={employee.image}
                        name={employee.name}
                        lastname={employee.lastname}
                        position={employee.position}
                    />
                })}
            </ul>
        </div>
    )
}

export default EmployeesPage;