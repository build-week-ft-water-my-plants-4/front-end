import React,{useState} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const initialLoginValues = {
    username:"",
    password:""
}


const Login = (props) => {
    const { userLoggedIn, setUserLoggedIn } = props;
    const { push } = useHistory();
    const [ loginValues, setLoginValues ] = useState(initialLoginValues)

    const onChange = (event) => {
        const { name, value } = event.target;
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }
    
    const onSubmit = evt =>{
        evt.preventDefault()
        axiosWithAuth()
            .post('/auth/login', loginValues)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id);
                push('/dashboard');
            })
            .catch(err => {
                console.error(err);
            });
            setUserLoggedIn(true);
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