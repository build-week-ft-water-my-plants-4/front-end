import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledLandingContainer,
    StyledIntroContainer,
    StyledSpan,
    LandingButton,
    LandingButtonsContainer,
    LandingImage,
    LandingSrc,
    MoreInfoContainer,
    MoreInfoImage,
    MoreInfoSection,
    plantGrowSrc,
    MoreInfoText,
    plantingSrc,
    wateringSrc,
    StyledTitle
} from './LandingPageStyles';

const LandingPage = () => {
    return (
        <StyledLandingContainer>

            <StyledIntroContainer>
                <StyledTitle>
                    <h3>Introducing<br/><StyledSpan>Garden of Eden</StyledSpan></h3>
                </StyledTitle>

                <LandingButtonsContainer>
                    <LandingButton>
                        <Link 
                            style={{textDecoration: "none", color: "black", fontWeight: 'bold'}} to='/login'>
                            Login
                        </Link>
                    </LandingButton>

                    <LandingButton>
                        <Link
                            style={{textDecoration: "none", color: "black", fontWeight: 'bold'}} to='sign-up'>
                            Sign Up
                        </Link>
                    </LandingButton>
                </LandingButtonsContainer>
                
                <MoreInfoContainer className='more-info-section'>

                        <MoreInfoSection>
                            <MoreInfoImage src={plantingSrc} />
                            <MoreInfoText>Always been scared about starting your garden from square one? Have a bunch of seeds around the house? Let <span>Garden of Eden</span> help you stop killing your plants!</MoreInfoText>
                        </MoreInfoSection>

                        <MoreInfoSection>
                            <MoreInfoImage src={wateringSrc} />
                            <MoreInfoText>With <span>Garden of Eden</span>, you can take the next steps to turning your living room into a jungle. Customizable watering schedules, along with push notifications means you'll kill another plant. </MoreInfoText>
                        </MoreInfoSection>

                        <MoreInfoSection>
                            <MoreInfoImage src={plantGrowSrc}/>
                            <MoreInfoText>Just add each new plant to your dashboard, set the watering frequency, and then wait for the seedling to grow. <span>Garden of Eden</span> will help take care of the rest!</MoreInfoText>
                        </MoreInfoSection>

                </MoreInfoContainer> 
            </StyledIntroContainer>
            

            <LandingImage src={LandingSrc}/>
        </StyledLandingContainer>
    );
};

export default LandingPage;