import React, { useState, useEffect } from "react";
import axios from "axios";

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

const initialPlant = [];
const initialDisabled = false;

const Create = () => {
  const [plant, setPlant] = useState(initialPlant);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {};

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a Plant</h2>
      <label>
        <p>
          What's your plants nickname?{" "}
          <input
            name="plantName"
            type="text"
            placeholder="Add a Nickname"
            onChange={onChange}
          />
        </p>
      </label>
      <label>
        <p>
          What species is it?{" "}
          <input
            name="species"
            type="text"
            placeholder="Add the Species"
            onChange={onChange}
          />
        </p>
      </label>
      <label>
        <p>
          How often do you water it?{" "}
          <select name="h2o_frequency" onChange={onChange}>
            <option value=""> -- Select -- </option>
            <option value="1">Every Day</option>
            <option value="3">Every Three Days</option>
            <option value="5">Every Five Days</option>
            <option value="7">Once a Week</option>
          </select>
        </p>
      </label>
      <button disabled={disabled}>Add</button>
    </form>
  );
};

export default Create;
