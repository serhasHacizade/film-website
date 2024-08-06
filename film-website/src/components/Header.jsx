/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import "./css/Header.css";
import logo from "../assets/logo.png";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() =>navigate(props.login ? "/login": "/signup")}>{props.login ? "Log in" : "Sign in"}</button>
    </div>
  );
};

export default Header;
