import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPlant from '../Add Plant/AddPlant';

const Dashboard = () => {

    const userID = parseInt(localStorage.getItem('user_id'));

    const [ plants, setPlants ] = useState([]);
    
    useEffect(() => {
        axios.get('https://water-my-plants-4-api.herokuapp.com/api/plants')
        .then(resp => {
            const allPlantsArray = resp.data;
            // console.log(allPlantsArray);
            allPlantsArray.map(entry => {
                console.log(entry.user_id);
            });
            const userPlants = allPlantsArray.filter(entry => entry.user_id === userID);
            console.log(userPlants);
            setPlants(userPlants)
        })
        .catch(err => {
            console.log(err);
        });
    }, [plants])

    return(
        <>
        {
            (plants.length > 1) ? plants.map(plant => {
                return(
                    <div>
                        <h6>{plant.species}</h6>
                        <h6>{plant.plant_id}</h6>
                    </div>
                )
            }) : <h4> Add plants to get started </h4>

        }

        <div>
            <AddPlant />
        </div>
        </>
    );
};

export default Dashboard;