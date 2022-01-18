import React from "react";
import axios from "axios";

function Signup() {
    
  const baseURL = "http://3.140.210.76:8000/api/"

  function handleChange(event) {
    event.preventDefault();
    axios.post(`${baseURL}user/`, {
      "first_name": event.target[0].value,
      "last_name": event.target[1].value,
      "email": event.target[2].value,
      "password": event.target[3].value
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <label htmlFor="fName">First name:</label><br />
        <input type="text" name="fName"/><br />
        <label htmlFor="lName">Last name:</label><br />
        <input type="text" name="lName"/><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" name="email"/><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password"/><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default Signup;