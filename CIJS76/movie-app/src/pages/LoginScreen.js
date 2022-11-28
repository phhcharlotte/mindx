import React, { useState } from "react";
import "./LoginScreen.css";
import NetflixLogo from "../assets/images/Logonetflix.png";
import SignInScreen from "../components/Sign In Sign up/SignInScreen";
const LoginScreen = (props) => {
  const [signIn, setSignIn] = useState();
  return (
    <div className="LoginScreen">
      <div className="Logo">
        <img src={NetflixLogo} alt="" />
      </div>
      <button onClick={() => setSignIn(true)} className="button_SignIn">
        Sign In
      </button>
      <div className="body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="text_input">
              <form>
                <input type="email" placeholder="Enter your email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="button_start"
                >
                  Get Started{" "}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
