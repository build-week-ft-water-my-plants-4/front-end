import styled from 'styled-components';

export const StyledLandingContainer = styled.div`
    /* border: 3px solid ${props => props.theme.colors.mainBrown}; */
    font-size: ${props => props.theme.fontSizes.large};
    display: flex;
    justify-content:space-around;
`

export const StyledIntroContainer = styled.div`
    display: flex column;
    /* border: 5px solid green; */
`

export const StyledSpan = styled.span`
    color: ${props => props.theme.colors.mainGreen};
`

export const LandingImage = 'https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'