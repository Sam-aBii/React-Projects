import React from "react";
import Input from "./input";
import "./forms.css"

function Login() {
  return (
    <div>
     <form className="form">
     <img 
     style = {{width: "270px", paddingBottom: "30px"}}
     src = "https://media.giphy.com/media/13YBtSNOAA70TC/giphy.gif" 
     alt= "avater" />
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="Confirm password" />
      <button type="submit">Login</button>
    </form>
    </div>
   
  );
}

export default Login;