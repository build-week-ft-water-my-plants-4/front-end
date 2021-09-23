import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

import {
  GeneralStyles,
  FormStyles,
  AddPlantButton,
  StyledInputs,
  StyledHeading,
  ButtonCenter,
} from "./AddPlantStyles";

const initialFormValues = {
  nickname: "",
  species: "",
  h20_frequency: "",
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
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("https://water-my-plants-4-api.herokuapp.com/api/users")
      .then((response) => {
        console.log("users", response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://water-my-plants-4-api.herokuapp.com/api/plants")
      .then((response) => {
        console.log("plants", response);
        setPlants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //fetch version for plant data
  // const getPlant=async()=>{
  //   const response =await fetch('https://water-my-plants-4-api.herokuapp.com/');
  //   const data=await response.json();
  //   console.log(data)
  // }

  console.log(plants);

  const listofPlants = plants.map((plant) => {
    return plant.nickname;
  });

  const onSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth().post("/api/plants", formValues)
    .then(res => {
      setFormValues(initialFormValues);
      push('/dashboard')
    })
    .catch(err => {
      console.error(err);
      setFormErrors(err);
    })
    .finally(res => {
      window.location.reload(true);
    })
    console.log(formValues);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <GeneralStyles>
      <FormStyles onSubmit={onSubmit}>
        <StyledHeading>Add a Plant</StyledHeading>

        <StyledInputs>
          What's your plants nickname?
          <br />
          <input
            name="nickname"
            type="text"
            placeholder="Add a Nickname"
            value={formValues.nickname}
            onChange={onChange}
          />
        </StyledInputs>

        <StyledInputs>
          What species is it?
          <br />
          <input
            name="species"
            type="text"
            placeholder="Add the Species"
            onChange={onChange}
            value={formValues.species}
          />
        </StyledInputs>

        <StyledInputs>
          How often do you water it?
          <br />
          <select name="h2o_frequency" onChange={onChange}>
            <option value=""> -- Select -- </option>
            <option value="1">Every Day</option>
            <option value="3">Every Three Days</option>
            <option value="5">Every Five Days</option>
            <option value="7">Once a Week</option>
          </select>
        </StyledInputs>

        <ButtonCenter>
          <AddPlantButton disabled={false}>Add</AddPlantButton>
        </ButtonCenter>
      </FormStyles>

      <div>
        {plants.map((plant) => (
          <div>
            <h3>{plant.nickname}</h3>
            <h3>{plant.species}</h3>
            <h3>{plant.h20_frequency}</h3>
          </div>
        ))}
      </div>
    </GeneralStyles>
  );
};

export default AddPlant;
