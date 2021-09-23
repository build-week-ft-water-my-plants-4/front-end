import React from "react";
import { AddPlantButton } from "../Add Plant/AddPlantStyles";
import { Link } from 'react-router-dom'
const Plant = (props) => {
    const { plant } = props;
    return(
       <div>
        <div className="plant-card">
            <h5>{plant.nickname}</h5>
            <h5>{plant.species}</h5>
            <h5>{plant.h2o_frequency}</h5>
        </div>
        <div className='edit-btn'>
        {/* need to change link later when route is setup */}
        <Link to="/edit-plant"><AddPlantButton>Edit Plant</AddPlantButton></Link>
        </div>
       </div>
    )
} 

export default Plant;