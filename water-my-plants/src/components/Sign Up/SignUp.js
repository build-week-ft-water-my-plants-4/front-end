import axios from 'axios';
import React, {useState} from 'react';

function SignUp(props) {
    const initialSignupValues={
        username:"",
        phone_number: 0,
        password:""
    }

    const [signupValues,setSignupValues]=useState(initialSignupValues);
    
    const onChange = (event)=>{
        const {name,value}=event.target;
        setSignupValues({...signupValues,[name]:value})
    }

    const onSubmit=event=>{
        event.preventDefault()
        axios.post('https://water-my-plants-4-api.herokuapp.com/auth/register', signupValues)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('phone_number', res.data.phone_number);
            console.log(res);
            props.history.push('/login');
        })
        console.log(signupValues)
    }

    return (
        <form onSubmit={onSubmit}>
                <h2>Sign Up Form</h2>
                <label>username
                    <input
                    type="text"
                    name='username'
                    value={signupValues.username}
                    onChange={onChange}
                    placeholder="Insert your New Username"
                    />
                </label>
                <br/>
                <label>Phone number
                    <input
                    type="text"
                    name='phone_number'
                    value={signupValues.phone_number}
                    onChange={onChange}
                    placeholder="Insert your Phone number"
                    />
                </label>
                <br/>
                <label>Password
                    <input
                    type="text"
                    name='password'
                    value={signupValues.password}
                    onChange={onChange}
                    placeholder="Insert your user Password"
                    />
                </label>
                <br/>
                <input type='submit' value="Sign Up"></input>
                <button>Go Back</button>
            </form>


    );
}

export default SignUp;