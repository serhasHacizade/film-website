/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

import TopNav from "../components/TopNav";
import SliderContainer from "../components/SliderContainer";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenres, fetchMovies } from "../store";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  });

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
        src="https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
        alt="hero image"
      />
        <div className="container">
          <div className="title">
            <h1>Deadpool & Wolverine</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est qui pariatur excepturi, neque recusandae facere sapiente, at
              laborum quas voluptates, atque saepe ab ipsum eum! Illo
              necessitatibus dolorum ratione.
            </p>
          </div>
          <div className="buttons">
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              className="playBtn"
              onClick={() => navigate("/player")}
            >
              <PlayArrowIcon />
              Play
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              className="moreBtn"
              color="error"
            >
              <InfoIcon />
              More
            </IconButton>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
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
