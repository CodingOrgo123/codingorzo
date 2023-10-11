import React, { useState } from "react";
import "../styles/Register.css";
const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className="register">
         <div className={`cont ${addclass}`} id="containerrs">
      <div className="form-container  sign-up-container">
        <form2>

          <h1><i className="fa fa-user" id="user"></i>Create Account</h1>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" id="btn-8">REGISTER</button>
        </form2>
      </div>
      <div className="form-container sign-in-container">
        <form2>
          <h1><i className="fa fa-user" id="user"></i>Login</h1>
          <input type="email" placeholder="EMAIL" id="inputss" />
          <input type="password" placeholder="PASSWORD" id="inputss" />
          <button type="submit" id="btn-8">LOGIN</button>
        </form2>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <div><p id="right">Welcome to Codingorzo</p></div>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <div ><p id="right">Welcome to the Codingorzo</p>
            </div>

            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
export default LoginRegister;