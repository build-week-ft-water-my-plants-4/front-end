import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

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

function AddPlant(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth().post("/api/plants", formValues)
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.error(err);
      setFormErrors(err)
    })
  };

  const onChange = (event) => {
    const {name,value}=event.target;
    setFormValues({...formValues,[name]:value})
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a Plant</h2>
      <label>
        <p>
          What's your plants nickname?{" "}
          <input
            name="nickname"
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
      <button disabled={false}>Add</button>
    </form>
  );
}

export default AddPlant;