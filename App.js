import { useState } from "react";
import React from "react";

export default function App() {

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  console.log(FormData.favColor);
  function HandleChange(event) {  
    const {name, value, type, checked}=event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type=== 'checkbox'? checked :  value,
      };
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(FormData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="FirstName"
        onChange={HandleChange}
        name="firstName"
        value={FormData.firstName}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="LastName"
        onChange={HandleChange}
        name="lastName"
        value={FormData.LastName}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        onChange={HandleChange}
        name="email"
        value={FormData.email}
      />
      <br />
      <br />
      <textarea
        cols="30"
        rows="10"
        placeholder="comments"
        onChange={HandleChange}
        name="comments"
        value={FormData.comments}
      ></textarea>
      <br />
      <br />
      <input type="checkbox" id="isFriendly" value={FormData.isFriendly} onChange={HandleChange} />
      <label htmlFor="isFriendly">Is friendly?</label>
      <br/>
      <br/>
      
      <fieldset>

        <legend>Employment status</legend>

        <input type="radio" id="employment" name="employment" value="employed" onChange={HandleChange} checked={FormData.employment=== "employed"}/>
        <label htmlFor="employment">employed</label>
        <br />
        <input type="radio" id="fully employed" name="employment"  value="fully" onChange={HandleChange} checked={FormData.employment=== "fully"}/>
        <label htmlFor="fully employed">fully employed</label>
        <br />
        <input type="radio" id="partial employed" name="employment" value="partially" onChange={HandleChange}  checked={FormData.employment=== "partially"}/>
        <label htmlFor="partial employed">partially employed</label>

      </fieldset>

      <br />
      <br />

      <label htmlFor="color"> choose your favourite color</label>
      <br />
      <select name="favColor" id="color" value={FormData.favColor}  onChange={HandleChange}>
        <option value="red">Red</option>
        <option value="green">green</option>
        <option value="Blue">Blue</option>
        <option value="Uganda">Uganda</option>
      </select>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    
  );
}
