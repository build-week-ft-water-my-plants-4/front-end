import React from 'react';
import { Link } from 'react-router-dom';


import { 
    StyledButton
} from './../../theme/Theme';

import {
    StyledLandingContainer,
    StyledIntroContainer,
    StyledSpan
} from './LandingPageStyles';

const landingImage = 'https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'

const LandingPage = () => {
    return (
        <StyledLandingContainer>

            <StyledIntroContainer>
                <h3>Introducing<br/><StyledSpan>Garden of Eden</StyledSpan></h3>
                <StyledButton><Link to='/login'>Login</Link></StyledButton>
                <StyledButton><Link to='sign-up'>Sign Up</Link></StyledButton>
                <StyledButton><Link to='add-plant'>Add Plant Component</Link></StyledButton>
            </StyledIntroContainer>
            

            <img src={landingImage}/>
        </StyledLandingContainer>
    );
};

export default LandingPage;