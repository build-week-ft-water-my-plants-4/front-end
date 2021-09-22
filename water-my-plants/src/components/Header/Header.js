import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const token = localStorage.getItem("token")
    return (
        <div style={{border: "3px solid red"}}>
            <h1>Garden of Eden</h1>
            <div className='nav-bar'>
               
                <Link to='/login' className="btn btn-click">Login</Link>

                <Link to='/sign-up' className="btn btn-click">Sign Up</Link>

                <Link to='/add-plant' className="btn btn-click">Plants</Link>

                <Link to='/logout' className="btn btn-click">Logout</Link>

            </div>
        </div>
    );
};

export default Header;