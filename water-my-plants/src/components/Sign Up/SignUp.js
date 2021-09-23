import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {
    StyledSignupForm,
    StyledFormandImage,
    StyledImage,
    StyledButtonContainer,
    StyledSignupLabel,
    WateringCanImage,
    StyledButtonsforLoginSignup
} from './SignUpStyles';


const SignUp = (props) => {
   
    const initialSignupValues={
        username:"",
        phone_number: '',
        password:""
    };

    const [signupValues, setSignupValues] = useState(initialSignupValues);
    

    const onChange = (event) => {
        const { name, value } = event.target;
        setSignupValues({
            ...signupValues,
            [name]: value})
    };

    const onSubmit = event => {
        event.preventDefault()
        axios.post('https://water-my-plants-4-api.herokuapp.com/auth/register', signupValues)
            .then(res => {
                console.log('signup submit response', res);
                props.history.push('/login');
            })
            .catch(err => {
                console.log(err);
            })

        console.log(signupValues, 'signup.js - signupvalues')
    }

    return (
        
        <StyledFormandImage>

            <StyledSignupForm  onSubmit={onSubmit}>
                <h2>Sign Up Form</h2>

                <StyledSignupLabel>Username
                    <input
                    type="text"
                    name='username'
                    value={signupValues.username}
                    onChange={onChange}
                    placeholder="Insert your New Username"
                    />
                </StyledSignupLabel>
                
                <StyledSignupLabel>Phone number
                    <input
                    type="text"
                    name='phone_number'
                    value={signupValues.phone_number}
                    onChange={onChange}
                    placeholder="Insert your Phone number"
                    />
                </StyledSignupLabel>
               
                <StyledSignupLabel>Password
                    <input
                    type="password"
                    name='password'
                    value={signupValues.password}
                    onChange={onChange}
                    placeholder="Insert your user Password"
                    />
                </StyledSignupLabel>
                
                <StyledButtonContainer>
                    

                    <StyledButtonsforLoginSignup type='submit' value="Sign Up">Sign Up</StyledButtonsforLoginSignup>
                    <Link to="/login"><StyledButtonsforLoginSignup>Go Back</StyledButtonsforLoginSignup></Link>
                </StyledButtonContainer>

            </StyledSignupForm>

            <StyledImage src={WateringCanImage}></StyledImage>

        </StyledFormandImage>



    );
}

export default SignUp;