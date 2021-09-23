import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

export const StyledDash = styled.div`
.plant-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 6px 4px 2px 2px;
    margin: 2%;
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 10px;
    height: 60px;
    color: lightgreen;
    background-color: ${props => props.theme.colors.mainBrown};
}
.edit-btn{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
`

// styling for the plant card
export const StyledPlantCard=styled.div`
display:flex;
background-color: #e5e5e5;
margin: 3% 2%;
padding-right:4%;
border-radius:25px;
`
export const StyledPlantCardDiv=styled.div`
width:100%;
border:1px solid red;
`
// styling end here