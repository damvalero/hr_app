import React from 'react';
import { useParams } from 'react-router-dom';

import './EmployeeProfile.css';

const DUMMY_EMPLOYEES = [{
  id: "e1",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Mary",
  lastname: "Bruger",
  age: '30',
  position: "Designer"
},
{
  id: "e2",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Annarita",
  lastname: "Smith",
  age: '26',
  position: "Human Resources"
},
{
  id: "e23",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Pedro",
  lastname: "Smith",
  age: '34',
  position: "Human Resources"
},
{
  id: "e4",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Vanessa",
  lastname: "Smith",
  age: '31',
  position: "Human Resources"
}, {
  id: "e25",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Manuel",
  lastname: "Smith",
  age: '45',
  position: "Human Resources"
}, {
  id: "e26",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Daniel",
  lastname: "Smith",
  age: '40',
  position: "Human Resources"
},
{
  id: "e27",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Maria",
  lastname: "Smith",
  age: '30',
  position: "Human Resources"
},
{
  id: "e28",
  image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
  name: "Carolina",
  lastname: "Smith",
  age: '34',
  position: "Human Resources"
},
];

const EmployeeProfile = () => {
  const employeeId = useParams().id;

  const identifiedEmployee = DUMMY_EMPLOYEES.find(item => item.id === employeeId);

  if (!identifiedEmployee) {
    return (
      <div className='page-margin'>
        <div className='page-space'>
          <p>Could not find employee!</p>
        </div>
      </div>
    )
  }

  return (
      <div className='page-vertical-space'>
        <div className='align-title '>
          <h1 className='title-site'>{identifiedEmployee.name}'s Profile</h1>
        </div>
        <div className='page-direction'>
          <div className='upper-info'>
            <div className='img-side'>
              <div className='img-decoration'>
                <img src={identifiedEmployee.image} alt={identifiedEmployee.name} />
              </div>
            </div>
            <div className='primary-info profile-background'>
              <div className='name-info'>
                <p>{identifiedEmployee.name}</p>
                <p>{identifiedEmployee.lastname}</p>
              </div>
              <p className='position-info'>{identifiedEmployee.position}</p>
            </div>
          </div>
          <div className='bottom-info'>
            <div className='personal-info'>
              <p>Gender: <pan>Male</pan></p>
              <p>Age: {identifiedEmployee.age}</p>
              <p>Civil status: <span>Single</span></p>
              <p>Adress: <span>Guerra junqueiro</span></p>
            </div>
            <div className='professional-info'>
              <p>Years of experience: <span>2</span></p>
              <p>Highest degree: <span>Bachelor</span></p>
              <p>Active projects: <span>Inetum, Tesla</span></p>
            </div>
          </div>
        </div>
    </div >

  )
}

export default EmployeeProfile;
