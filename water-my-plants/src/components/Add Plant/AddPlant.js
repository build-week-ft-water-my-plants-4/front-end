import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const initialFormValues = {
  nickname: "",
  species: "",
  h20_frequency: ""
};

const initialFormErrors = {
  nickname: "",
  species: "",
  h20_frequency: "",
};

const AddPlant = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const userID = parseInt(localStorage.getItem('user_id'));

  // const [plants, setPlants]=useState([]);

  // useEffect(()=>{
  //     axios.get('https://water-my-plants-4-api.herokuapp.com/api/users')
  //       .then(response =>{
  //         console.log('users',response);
  //       }).catch(error=>{
  //         console.log(error);
  //       });

  //     axios.get('https://water-my-plants-4-api.herokuapp.com/api/plants')
  //       .then(response =>{
  //         console.log('plants',response);
  //         setPlants(response.data)
  //       }).catch(error=>{
  //         console.log(error);
  //       });
  // },[])

//fetch version for plant data
  // const getPlant=async()=>{
  //   const response =await fetch('https://water-my-plants-4-api.herokuapp.com/');
  //   const data=await response.json();
  //   console.log(data)
  // }

//  console.log(plants);

//   const listofPlants=plants.map((plant) => {
//     return plant.nickname
//   })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    axiosWithAuth()
      .post("/api/plants", formValues)
      .then(res => {
        console.log('addplant.js - formValues onsubmit', res);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.error(err);
        // setFormErrors(err)
      })
  };

  const onChange = (event) => {

    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
      user_id: userID})
  };

  return (
    <>
        <form onSubmit={onSubmit}>
          <h2>Add a Plant</h2>

          <label>
            <p>
              What's your plants nickname?
              <input
                name="nickname"
                type="text"
                placeholder="Add a Nickname"
                value={formValues.nickname}
                onChange={onChange}
              />
            </p>
          </label>

          <label>
            <p>
              What species is it?
              <input
                name="species"
                type="text"
                placeholder="Add the Species"
                onChange={onChange}
                value={formValues.species}
              />
            </p>
          </label>

          <label>
            <p>
              How often do you water it?
              <select name="h2o_frequency" onChange={onChange}>
                <option value=""> -- Select -- </option>
                <option value="1">Every Day</option>
                <option value="3">Every Three Days</option>
                <option value="5">Every Five Days</option>
                <option value="7">Once a Week</option>
              </select>
            </p>
          </label>

          <button disabled={false}>Add</button>
        </form>

        {/* <div>
            {plants.map((plant)=>(
              <div>
                <h3>{plant.nickname}</h3>
                <h3>{plant.species}</h3>
                <h3>{plant.h20_frequency}</h3>
              </div>
            ))}
        </div> */}
    </>
  )
}

export default AddPlant;
