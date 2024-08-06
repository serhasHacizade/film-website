import { useState } from "react";
import BackGroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./css/Signup.css";

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container" showPassword={showPassword}>
      <BackGroundImage />
        <Header login/>
      <div className="content" >
        <div className="body flex flex-col items-center justify-center">
          <div className="text flex flex-col">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <form className="flex flex-col">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Get Started</button>
          </form>
          <button>Login </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
