/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

import { signOut, onAuthStateChanged } from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate();

  const navlinks = [
    { name: "Home", link: "/" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled} ? "scrolled":"notScroll"`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png
            "
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightSide">
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            className="m-4 cursor-pointer button"
            onClick={() => signOut(firebaseAuth)}
          >
            <LogoutIcon />
          </IconButton>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    background-color: rgba(0, 0, 0, 0.79);
    display: flex;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 1.5rem;
    align-items: center;
    transition: 0ms.3s ease-in-out;

    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
      .links {
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    .button {
      background-color: red;
      cursor: pointer;
      color: white;
    }
  }
`;

export default TopNav;
