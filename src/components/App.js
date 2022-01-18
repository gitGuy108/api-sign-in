import React , { useState, useEffect } from "react";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <div>
      <h2>Signup</h2>
      <Signup />
      <h2>Login</h2>
      <Login />
    </div>
  );
}

export default App;
