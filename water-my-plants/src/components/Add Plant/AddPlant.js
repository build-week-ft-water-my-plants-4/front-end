
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import {useHistory} from 'react';
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
  h2o_frequency: "",
};

const initialFormErrors = {
  nickname: "",
  species: "",
  h2o_frequency: "",
};

const AddPlant = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  //fetch version for plant data
  // const getPlant=async()=>{
  //   const response =await fetch('https://water-my-plants-4-api.herokuapp.com/');
  //   const data=await response.json();
  //   console.log(data)
  // }

  const userID = parseInt(localStorage.getItem('user_id'));

  const onSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth().post("/api/plants", formValues)
    .then(res => {
      setFormValues(initialFormValues);
      props.history.push('/dashboard')
    })
    .catch(err => {
      console.error(err);
      setFormErrors(err);
    })
    console.log(formValues);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
      user_id: userID
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
    </GeneralStyles>
  );
};

export default AddPlant;
