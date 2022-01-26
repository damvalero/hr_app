import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import EmployeesPage from './pages/EmployeesPage';
import NewEmployeePage from './pages/NewEmployeePage';
import TeamPage from './pages/TeamsPage';
import EmployeeProfile from './pages/EmployeeProfile';
import DUMMY_EMPLOYEES from './dummyData.json';
import './App.scss';

const App = () => {
  const [employees,setEmployees] = useState(DUMMY_EMPLOYEES);

  const addEmployee = (newEmployee) => {

    const newEmployeeGroup = [...employees, newEmployee];

    setEmployees(newEmployeeGroup);

  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <EmployeesPage items={employees} />
        </Route>
        <Route path="/employees/new" exact>
          <NewEmployeePage onAddEmployee={addEmployee} />
        </Route >
        <Route path="/employees/teams" exact>
          <TeamPage />
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
