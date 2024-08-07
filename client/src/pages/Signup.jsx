import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignupContainer>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>watch anywhere, Cancel Anytime</h4>
            <h6>
              Ready to watch? Enter yoru email to create or restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input type="password" placeholder="password" name="password" />
            ) : (
              <input type="email" placeholder="email" name="email" />
            )}
            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button>Signup</button>
            )}
          </div>
        </div>
      </div>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      gap: 2rem;
      color: white;
    }
    h1 {
      padding: 0 15rem;
      text-align: center;
    }
    h4 {
      margin-top: -1.5rem;
    }
    h6 {
      margin-top: -1.5rem;
    }
  }
  .form {
    display: grid;
    grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr" : "2fr 1fr"};
    width: 60%;
    display: flex;
    margin-top: 3rem;
    input {
      color: black;
      padding: 1.5rem;
      font-size: 1.2rem;
      width: 45rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      width: 10rem;
    }
  }
`;

export default Signup;
