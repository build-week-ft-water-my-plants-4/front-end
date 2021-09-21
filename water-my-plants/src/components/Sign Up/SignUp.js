import React, {useState} from 'react';

function SignUp(props) {
    const initialSignupValues={
        username:"",
        phonenumber:"",
        password:""
    }

    const [signupValues,setSignupValues]=useState(initialSignupValues);
    
    const onChange = (event)=>{
        const {name,value}=event.target;
        setSignupValues({...signupValues,[name]:value})
    }

    const onSubmit=event=>{
        event.preventDefault()
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
                    name='phonenumber'
                    value={signupValues.phonenumber}
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