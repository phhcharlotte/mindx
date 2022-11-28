import React, { useEffect, useState } from "react";
import "./SigninScreen.css";
const users = [
  {
    id: 1,
    name: "Hoàng",
    email: "phamhuyhoang@gmail.com",
    password: "123",
  },
  {
    id: 2,
    name: "Ha",
    email: "phamthiha123@gmail.com",
    password: "123",
  },
];
const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  useEffect(()=>{
    setUser(users)
  },[]) 
  const register = (e) => {
    e.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="SignInScreen">
      <form onClick={signIn}>
        <h1>Sign In</h1>
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
        <button type="signIn" className="button_signIn">
          Sign In
        </button>

        <h4>
          <span className="gray">New to Netflix?</span>
          <span onClick={register} className="toLinkRegister">
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
