import React, {useState} from 'react';
import axios from 'axios';

function Login(props) {
   const [cred, setCred] = useState({
       username: '',
       password: '',
       phone_number: 0
   })

   const handleChange = e => {
       setCred({
           ...cred,
           [e.target.name]: e.target.value
       })
   }
   const login = e => {
       e.preventDefault();
       axios.post('', cred)
       .then(res => {
           localStorage.setItem("token", res.data.token);
           localStorage.setItem("phone_number", res.data.phone_number);
           localStorage.setItem("username", res.data.username);
           props.history.push('/landing');
       })
       .catch(err => {
           console.error(err);
       })
   }

    return (
        <div>
           <h3>Login here</h3>
            <form onSubmit={login}>
                <input
                   type='text'
                   name='usename'
                   value={cred.username}
                   onChange={handleChange}
                />
                <input
                   type="password"
                   name="password"
                   value={cred.password}
                   onChange={handleChange}
                />
                <input
                   type='number'
                   name="phone_number"
                   value={cred.phone_number}
                   onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;