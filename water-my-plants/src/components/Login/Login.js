
import React,{useState} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

function Login(props) {
    
        
       const initialLoginValues ={
        username:"",
        phonenumber:"",
        password:""
        }

    const [loginValues, setLoginValues]=useState(initialLoginValues)

    const onChange=(event)=>{
        const {name,value}=event.target;
        setLoginValues({...loginValues,[name]:value})
    }
    
    const onSubmit =evt =>{
        evt.preventDefault()
        axiosWithAuth().post('/login', loginValues)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("phone_number", res.data.phone_number);
            props.history.push('/add-plant');
        })
       console.log(loginValues)
    }
    return(
        

            <form onSubmit={onSubmit}>
                <h2>Log In Form</h2>
                <label>username
                    <input
                    type="text"
                    name='username'
                    value={loginValues.username}
                    onChange={onChange}
                    placeholder="Insert your Username"
                    />
                </label>
                <br/>
                <label>Phone number
                    <input
                    type="text"
                    name='phonenumber'
                    value={loginValues.phonenumber}
                    onChange={onChange}
                    placeholder="Insert your Phone number"
                    />
                </label>
                <br/>
                <label>Password
                    <input
                    type="text"
                    name='password'
                    value={loginValues.password}
                    onChange={onChange}
                    placeholder="Insert your user Password"
                    />
                </label>
                <br/>
                <input type='submit' value="Log In"></input>
                <button>Sign Up</button>
            </form>
    
    )
}
        
 

export default Login;