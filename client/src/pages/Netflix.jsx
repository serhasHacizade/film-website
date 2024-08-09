import { useState } from "react";

import styled from "styled-components";
import { Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="hero image"
        />
        <div className="container">
          <div className="title">
            <h1>Avengers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est qui pariatur excepturi, neque recusandae facere sapiente, at
              laborum quas voluptates, atque saepe ab ipsum eum! Illo
              necessitatibus dolorum ratione.
            </p>
          </div>
          <div className="buttons">
            <Button variant="contained" className="playBtn" onClick={() => navigate("/player")}>
              <IconButton
                size="large"
                edge="end"
                aria-label="menu"
                className="m-4 cursor-pointer"
              >
                <PlayArrowIcon />
              </IconButton>
              Play
            </Button>
            <Button variant="contained" className="moreBtn" color="error">
              <IconButton
                size="large"
                edge="end"
                aria-label="menu"
                className="m-4 cursor-pointer more-icon"
              >
                <InfoIcon/>
              </IconButton>
              More
            </Button>
          </div>
        </div>
      </div>
      <Card />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(80%);
    }
    img {
      height: 70vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        background-color: silver;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        background-color: black;
        cursor: pointer;
        border: 0.1rem solid white;
        .more-icon {
          color: white;
        }
      }
    }
  }
`;

export default Netflix;
