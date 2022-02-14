import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import Loading from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import EmployeesPage from './pages/EmployeesPage';
import NewEmployeePage from './pages/NewEmployeePage';
import EmployeeProfile from './pages/EmployeeProfile';
import UpdateEmployeePage from './pages/UpdateEmployee';
import './App.scss';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [chargingData, setChargingData] = useState(true);

  const getData = () => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/employees')
      .then((res) => {
        const allEmployees = res.data.employees;
        setEmployees(allEmployees);
      })
      .catch(error => { console.log("the error is ", error) })
  }

  const deleteEmployee = (deleteId) => {
    setEmployees(prevEmployees =>
      prevEmployees.filter(employee => employee.id !== deleteId)
    )
    getData();
  }

  const addEmployee = (newEmployee) => {
    axios.post(process.env.REACT_APP_BACKEND_URL + '/employees', newEmployee)
      .then((res) => {
        setEmployees([...employees, res.data.employee])
      })
      .catch(error => { console.log("the error is ", error) })
  }
  const refreshDom = ()=> {
    getData();
  }

  useEffect(() => {
    getData();
    setChargingData(false);
  }, [])

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
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <EmployeesPage items={employees} deleteEmployee={deleteEmployee} />
        </Route>
        <Route path="/employees/new" exact>
          <NewEmployeePage onAddEmployee={addEmployee} />
        </Route >
        <Route path="/employees/update/:id" exact>
          <UpdateEmployeePage refreshDom={refreshDom} />
        </Route >
        {/* id routes have to remain last */}
        <Route path="/employees/:id" exact>
          <EmployeeProfile />
        </Route >
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
