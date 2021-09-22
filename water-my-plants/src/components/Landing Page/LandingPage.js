import React from 'react';
import { Link } from 'react-router-dom';


import { 
    StyledButton
} from './../../theme/Theme';

import {
    StyledLandingContainer,
    StyledIntroContainer,
    StyledSpan,
    LandingImage
} from './LandingPageStyles';

const LandingPage = () => {
    return (
        <StyledLandingContainer>

            <StyledIntroContainer>
                <h3>Introducing<br/><StyledSpan>Garden of Eden</StyledSpan></h3>
                <StyledButton><Link to='/login'>Login</Link></StyledButton>
                <StyledButton><Link to='sign-up'>Sign Up</Link></StyledButton>
                <StyledButton><Link to='add-plant'>Add Plant Component</Link></StyledButton>
            </StyledIntroContainer>
            

            <img src={LandingImage}/>
        </StyledLandingContainer>
    );
};

export default LandingPage;