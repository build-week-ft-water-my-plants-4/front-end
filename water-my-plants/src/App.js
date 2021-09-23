import './App.css'
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/Protected Route/ProtectedRoute';

//styles
import StyledTheme from './theme/Theme';

//components
import Header from './components/Header/Header';
import LandingPage from './components/Landing Page/LandingPage';
import Login from './components/Login/Login';
import Logout from './components/Protected Route/Logout'
import SignUp from './components/Sign Up/SignUp';
import AddPlant from './components/Add Plant/AddPlant';
import Dashboard from './components/Dashboard/Dashboard';
import ProfilePage from './components/Profile Page/ProfilePageStyles';

const App = () => {
  // const isLoggedin = localStorage.getItem("token");
  const [ userLoggedIn, setUserLoggedIn ] = useState(false); 

  return (
    <StyledTheme>

      <Header userLoggedIn={userLoggedIn} />

      <Switch>

        <Route exact path='/' component={LandingPage}/>

        <Route path='/login'>
          <Login setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} />
        </Route>
          

        <Route path='/sign-up' component={SignUp} />

        <ProtectedRoute path='/dashboard' component={Dashboard} />

        <ProtectedRoute path='/add-plant' component={AddPlant} />

        <ProtectedRoute path='/profile-page' component={ProfilePage} />
        
        <ProtectedRoute path='/logout'>
          <Logout setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} />
        </ProtectedRoute>

      </Switch>

    </StyledTheme>
  )
}

export default App;
