import React from "react";
import "./App.css"
import Login from "./Compoenets/login";

var isLoggedIn = false;

function userLogIn() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

function App() {
  return <div className="container">{userLogIn()}</div>;
}

export default App;
