import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

 // styling
 const StyledFormandImage=styled.div`
 display:flex;
 
 `
 const StyledImage=styled.img`
 object-fit:contain;
 max-width:100%;
 box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
 
 `
 const StyledButtonContainer=styled.div`
 display:flex;
 margin: 10% 0%;
 `
 const StyledSignupForm=styled.form`
 display:flex;
 flex-direction:column;
 box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
 background-color:#869D7A;
 width:50%;
 height:auto;
 color:white;
 
 `
 const StyledSignupLabel=styled.label`
 display:flex;
 flex-direction:column;
 width:90%;
 margin:2% 0%;
 justify-content:space-between;

 `
 //styling ends here


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
                    type="text"
                    name='password'
                    value={signupValues.password}
                    onChange={onChange}
                    placeholder="Insert your user Password"
                    />
                </StyledSignupLabel>
                
                <StyledButtonContainer>

                <button type='submit' value="Sign Up">Sign Up</button>
                <Link to="/login"><button>Go Back</button></Link>
                
                </StyledButtonContainer>
            </StyledSignupForm>
            <StyledImage src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJpbmclMjBwbGFudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></StyledImage>
            </StyledFormandImage>


    );
}

export default SignUp;