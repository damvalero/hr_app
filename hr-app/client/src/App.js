import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';
import EmployeesPage from './pages/EmployeesPage';
import NewEmployee from './components/NewEmployee';
import TeamPage from './pages/TeamsPage';
import './App.css';

const App = () => {
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
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  }, {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  }, {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  {
    id: "e2",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Annarita",
    lastname: "Smith",
    position: "Human Resources"
  },
  ];
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" >
          <EmployeesPage items={DUMMY_EMPLOYEES} />
        </Route>
        <Route path="employees/new">
          <NewEmployee />
        </Route >
        <Route path="employees/teams">
          <TeamPage />
        </Route >
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
