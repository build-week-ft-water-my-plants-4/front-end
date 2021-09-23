import React from "react";

const Plant = (props) => {
    const { plant } = props;
    return(
       <>
        <div className="plant-card">
            <h5>{plant.nickname}</h5>
            <h5>{plant.species}</h5>
            <h5>{plant.h2o_frequency}</h5>
        </div>
        
       </>
    )
} 

export default Plant;