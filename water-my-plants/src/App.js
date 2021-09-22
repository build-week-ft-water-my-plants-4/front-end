
import React from 'react';
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
const App = () => {
  const isLoggedin = localStorage.getItem("token");

  return (
    <>
    <StyledTheme>

      <Header />

      <Switch>

        <Route exact path='/' component={LandingPage}/>

        <Route path='/login' component={Login} />

        <Route path='/sign-up' component={SignUp} />

        <ProtectedRoute path='/add-plant' component={AddPlant} />
        
        <Route path='/logout' component={Logout} />

      </Switch>

    </StyledTheme>
    </>
  )
}

export default App;
