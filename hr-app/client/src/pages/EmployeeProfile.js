import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome, } from '@fortawesome/free-solid-svg-icons'

import Loading from '../components/Loading';
import './EmployeeProfile.scss';

const EmployeeProfile = () => {
  const employeeId = useParams().id;
  const [employee, settEmployee] = useState(null)
  const [chargingData, setChargingData] = useState(true)
  const [employeeDoesntExist, setEmployeeDoesntExist] = useState(false)

  useEffect(() => {
    async function searchEmployee() {
      try {
        const { data: employee } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/employees/${employeeId}`);
        settEmployee(employee)
        setChargingData(false);
      } catch (error) {
        if (error.response.status === 404 || error.response.status === 400) {
          setEmployeeDoesntExist(true);
        } else {
          console.log('the server explode!!')
        }
        setChargingData(false);
      }
    }
    searchEmployee();
  }, [])

  if (employeeDoesntExist) {
    return (
      <div className='page-margin'>
        <div className='page-space'>
          <p>Could not find employee!</p>
        </div>
      </div>
    )
  }

  if (chargingData) {
    return (
      <div className='page-margin'>
        <div className="page-space">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className='page-vertical-space profile-center'>
      {/* <div className='align-title '>
        <h1 className='title-site'>{employee.name}'s Profile</h1>
      </div> */}
      <div className='page-direction'>
        <div className='upper-info'>
          <div className='primary-info profile-background'>
            {/* <div className='name-info'> */}
              <h1 className='profile-title'>{`${employee.name} ${employee.lastname}`}'s Profile</h1>
              {/* <p>{employee.name}</p>
              <p>{employee.lastname}</p> */}
            {/* </div> */}
            <p className='position-info'>{employee.position}</p>
          </div>
        </div>
        <div className='bottom-info'>
          <div className='personal-info'>
            <div className='profile-icon'>
              <FontAwesomeIcon size='lg' icon={faHome} />
            </div>
            <p>Gender: {employee.gender}</p>
            <p>Age: {employee.age} years</p>
            <p>Civil status: {employee.civil} </p>
            <p>Address: {employee.address} </p>
          </div>
          <div className='professional-info'>
            <div className='profile-icon'>
              <FontAwesomeIcon size='lg' icon={faBriefcase} />
            </div>
            <p>Years of experience: {employee.experience} </p>
            <p>Highest degree: {employee.highestDegree} </p>
            <p>Profession: {employee.profession} </p>
            <p>Languages: {employee.languages} </p>
          </div>
        </div>
      </div>
    </div >

  )
}

export default EmployeeProfile;
