import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';
import EmployeesPage from './pages/EmployeesPage';
import NewEmployeePage from './pages/NewEmployeePage';
import TeamPage from './pages/TeamsPage';
import EmployeeProfile from './pages/EmployeeProfile';
import './App.scss';

const App = () => {
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
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <EmployeesPage items={DUMMY_EMPLOYEES} />
        </Route>
        <Route path="/employees/new" exact>
          <NewEmployeePage />
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
