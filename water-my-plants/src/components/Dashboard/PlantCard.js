import React from "react";
import { AddPlantButton } from "../Add Plant/AddPlantStyles";
import { Link } from 'react-router-dom'
import {StyledPlantCard,StyledPlantCardDiv,PlantIcon,PlantIconImg} from "./DashboardStyles"

const Plant = (props) => {
    const { plant } = props;
    return(
       <StyledPlantCard>
           <PlantIconImg src={PlantIcon}/>
        <StyledPlantCardDiv className="plant-card">
            <h5>{plant.nickname}</h5>
            <h5>{plant.species}</h5>
            <h5>{plant.h2o_frequency}</h5>
            
        </StyledPlantCardDiv>
        <div className='edit-btn'>
        {/* need to change link later when route is setup */}
        <Link to="/edit-plant"><AddPlantButton>Edit Plant</AddPlantButton></Link>
        </div>
       </StyledPlantCard>
    )
} 

export default Plant;