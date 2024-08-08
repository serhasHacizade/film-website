/* eslint-disable no-unused-vars */
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <LoginContainer>
      <BackgroundImage />
      <div className="login-content">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <div className="inner-container">
                <label htmlFor="">Email</label>
                <TextField
                  className="input"
                  id="email"
                  name="email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="inner-container">
                <label>Password</label>
                <TextField
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <Button variant="text" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  position: relative;
  .login-content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.83);
      height: 70vh;
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;
      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input {
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 25rem;
          height: 2.4rem;
          outline: none;
          border: none;
        }
        #email,
        #password {
          background-color: white;
        }
        button {
          padding: 0.5rem;
          background-color: red;
          border: none;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      .inner-container {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default LoginPage;
