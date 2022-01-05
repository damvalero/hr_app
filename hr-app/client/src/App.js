import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import EmployeesPage from './pages/EmployeesPage';
import NewEmployee from './components/NewEmployee';
import './App.css';

const App = () => {
  const DUMMY_EMPLOYEES = [{
    id: "e1",
    image: "https://cdn.thezebra.com/zfront/media/production/images/Jenn_1.59827405.fill-380x380.jpg",
    name: "Mary",
    lastname: "Bruger",
    position: "Designer"
  }];
  return (
    <Router>
      <Switch>
        <Route path="/" >
          <EmployeesPage items={DUMMY_EMPLOYEES} />
        </Route>  
        <Route path="employees/new">
          <NewEmployee />
        </Route >
        <Redirect to="/" /> 
      </Switch>
    </Router>
  )
}

export default App;
