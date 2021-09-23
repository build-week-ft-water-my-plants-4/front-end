import styled from 'styled-components';

export const LandingSrc = 'https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'
export const plantingSrc = 'https://cdn-icons-png.flaticon.com/512/2424/2424769.png'
export const wateringSrc = 'https://cdn-icons-png.flaticon.com/512/3319/3319229.png'
export const plantGrowSrc = 'https://cdn-icons-png.flaticon.com/512/2674/2674333.png'

//LANDING CONTAINER
export const StyledLandingContainer = styled.div`
    /* border: 3px solid ${props => props.theme.colors.mainBrown}; */
    font-size: ${props => props.theme.fontSizes.large};
    display: flex;
    justify-content:space-around;
    margin: 0 5%;
`
// LEFT SIDE HERO CONTAINER
export const StyledIntroContainer = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: min-content min-content;
    /* border: 5px solid green; */
    width: 35%;
`

// LANDING PAGE IMAGE RIGHT SIDE
export const LandingImage = styled.img`
    height: 85vh;
    border-radius: 10px;
    box-shadow: 0 0 2rem -0.25rem #869D7A;
`

// MAIN TITLE
export const StyledTitle = styled.div`
    /* border: 1px solid black; */
    height: fit-content;
    text-align: right;
`

export const StyledSpan = styled.span`
    color: ${props => props.theme.colors.mainGreen};
`

// BUTTONS
export const LandingButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 0 0;
`

export const LandingButton = styled.button`
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    padding: 15px;
    margin: 0 10px;
    font-size: ${props => props.theme.fontSizes.small};
    background: linear-gradient(#fff, #869D7A);
    border: none;
    border-radius: 10px;
    text-transform: uppercase;


    &:hover {
        background: ${props => props.theme.colors.mainGreen}
    }
`


// MORE INFO SECTION
export const MoreInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* border: 2px solid purple; */
`
export const MoreInfoSection = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    padding: 10px;
    text-align: right;
`

export const MoreInfoText = styled.section`
    /* border: 1px solid green; */
    font-size: 1.25rem;
    font-style: italic;
    margin-left: 10px;

    >span {
        color: ${props => props.theme.colors.mainGreen};
        font-weight: bold;
    }
`

export const MoreInfoImage = styled.img`
    padding: 10px;
    width: 140px;
    height: 140px;
    /* border: 1px solid grey; */
    border-radius: 10px;
    box-shadow: 0 0 2rem -0.25rem #869D7A;
    margin-right: 10px;
`
