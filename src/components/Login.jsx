import React, {useEffect, useState} from "react";
import axios from "axios";

function Login() {
    
  const baseURL = "http://3.140.210.76:8000/api/"

  const [ ui, setUi ] = useState(0);
//   useEffect(()=>{
//     axios.get(`${baseURL}token/`)
//        .then(res => {
//         console.log(res);
//         console.log(res.data);
//        })
//  },[]);

  function handleChange(event) {
    event.preventDefault();
    axios.post(`${baseURL}token/`, {
      "email": event.target[0].value,
      "password": event.target[1].value
    }).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    setUi(1);
    console.log("LOGGED IN");
  }).catch(err => {
    setUi(2);
  })
}

  if(ui === 0) {
    return (
      <div>
        <form onSubmit={handleChange}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" name="email"/><br />
          <label htmlFor="password">Password:</label><br />
          <input type="password" name="password"/><br />
          <button type="submit">Submit</button>
        </form>
      </div>
  );
  } else if(ui === 1) {
    return <h1>Hi, You are logged in!</h1>
  } else {
    return <h1>Invalid login credentials!</h1>
  }
}

export default Login;