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