import React, { useState } from "react";

const initialFormValues = {
  id: "",
  nickname: "",
  species: "",
  h20_frequency: "",
};

const initialFormErrors = {
  id: "",
  nickname: "",
  species: "",
  h20_frequency: "",
};

function AddPlant(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

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
}

export default AddPlant;
