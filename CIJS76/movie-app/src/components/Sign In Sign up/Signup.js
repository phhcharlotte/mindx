import React, { useState } from "react";
import NetflixLogo from "../assets/images/Logonetflix.png";
import "./Signup.css";
const SignUp = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cfmpassword, setCfmPassword] = useState();
  return (
    <div className="SignUpScreen">
      <div className="Logo">
        <img src={NetflixLogo} alt="" />
      </div>
      <div className="body">
        <form onSubmit={signUp}>
          <h1>Sign Up</h1>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email or phone number"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Cfmpassword"
            type="cfmpassword"
            value={password}
            onChange={(e) => setCfmPassword(e.target.value)}
          />
          <button type="signUp" className="button_signUp">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
