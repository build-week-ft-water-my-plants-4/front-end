import styled from 'styled-components';

export const StyledDash = styled.div`
.plant-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 6px 4px 2px 2px;
    margin: 2%;
    margin-left: 10%;
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
padding-left:2%;
border-radius:25px;
`
export const StyledPlantCardDiv=styled.div`
width:100%;
`
export const PlantIcon ="https://cdn3.iconfinder.com/data/icons/ecology-67/300/ecology-ecofriend-bio-eco-nature--plant-water-256.png"
export const PlantIconImg=styled.img`
max-height:100%;
max-width:100%;
width:10vh;

margin:auto;
object-fit:cover;
`
// styling end here