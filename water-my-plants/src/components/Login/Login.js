import React,{useState} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const Login = () => {

    const { push } = useHistory();
 
    const initialLoginValues ={
    username:"",
    phone_number:'',
    password:""
    }

    const [loginValues, setLoginValues]=useState(initialLoginValues)

    const onChange = (event) => {
        const { name, value } = event.target;
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }
    
    const onSubmit = evt =>{
        evt.preventDefault()
        axiosWithAuth().post('/auth/login', loginValues)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("password", res.data.password);
            push('/add-plant');
        })
        .catch(err => {
            console.error(err);
        })
       console.log(loginValues)
    }


    return(
        <form onSubmit={onSubmit}>
            <h2>Log In Form</h2>
            <label>Username:
                <input
                type="text"
                name='username'
                value={loginValues.username}
                onChange={onChange}
                placeholder="Insert your Username"
                />
            </label>
            <label>Phone Number:
                <input
                type="text"
                name='phone_number'
                value={loginValues.phone_number}
                onChange={onChange}
                placeholder="Insert your Phone number"
                />
            </label>
            <label>Password:
                <input
                type="password"
                name='password'
                value={loginValues.password}
                onChange={onChange}
                placeholder="Insert your user Password"
                />
            </label>

            <input type='submit' value="Log In" />
        </form>
    )
}
        
 

export default Login;