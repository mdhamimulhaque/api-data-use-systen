import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from './components/Users/Users';
import SingleUser from './components/SingleUser/SingleUser';
import RandomSingleUser from './components/RandomSingleInfo/RandomSingleInfo';
import Header from './components/Header/Header';
import Error from './components/Error/Error';


function App() {
 
  return (
    <div>
 
      <Router>
        <Switch>
          <Route path="/header">
            <Header />
          </Route>

          <Route exact path="/">
            <Header />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/single-users">
            <SingleUser />
          </Route>
          <Route exact path="/random-single-info">
             <RandomSingleUser />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
