
import {Link, Route, Switch} from 'react';
import React, {useState} from 'react';
<<<<<<< HEAD
import './App.css';
=======
import { Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/Protected Route/ProtectedRoute';
>>>>>>> a69d1e9b7b6e009a71c03c89cb4fd2bf8e869f04

//styles
import StyledTheme from './theme/Theme';

//components
import Header from './components/Header/Header';
import LandingPage from './components/Landing Page/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp';
import AddPlant from './components/Add Plant/AddPlant';
const App = () => {

<<<<<<< HEAD
=======
  const isLoggedin = localStorage.getItem("token");

>>>>>>> a69d1e9b7b6e009a71c03c89cb4fd2bf8e869f04
  return (
    <>
    <StyledTheme>

      <Header />

      <Switch>

        <Route exact path='/' component={LandingPage}/>

        <Route path='/login' component={Login} />

        <Route path='/sign-up' component={SignUp} />

        <Route path='/add-plant' component={AddPlant} />

      </Switch>

    </StyledTheme>
    </>
  )
}

export default App;
