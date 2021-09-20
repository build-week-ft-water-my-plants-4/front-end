import {Route, Redirect} from 'react-router-dom';
import React from 'react';

const ProtecRoute = ({component:Comment, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem("token")){
            return <Component {...props}/>
        } else {
            return <Redirect to='/login'/>
        }
    }}/>
}

export default ProtecRoute;