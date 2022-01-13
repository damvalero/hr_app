import React from 'react';
import { useParams } from 'react-router-dom';


const DUMMY_EMPLOYEES = [{
    id: "e1",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Mary",
    lastname: "Bruger",
    position: "Designer"
  },
  {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e23",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e4",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  }, {
    id: "e25",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  }, {
    id: "e26",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e27",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e28",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  ];

const EmployeePage = () => {
    const employeeId = useParams().id;

    const identifiedEmployee = DUMMY_EMPLOYEES.find(item => item.id === employeeId);

    if (!identifiedEmployee) {
        return(
            <div>
                <p>Could not find employee!</p>
            </div>
        )
    }

    return (
        <div className='center'>
            HERE IS TO EDIT EMPLOYEE
        </div>
    )
}

export default EmployeePage;
