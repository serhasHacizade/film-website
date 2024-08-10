/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useRef} from "react";
import Card from "./Card";
import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

export default React.memo(function MovieSlider({ data, title }) {

  const listRef = useRef();
  const [controlvisibility, setControlVisibility] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x -70;

    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSliderPosition(sliderPosition - 1)
    }
    if (direction === "right" && sliderPosition < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSliderPosition(sliderPosition + 1)
    }

  };

  return (
    <Container onMouseEnter={() => setControlVisibility(true)}
    onMouseLeave={() => setControlVisibility(false)}>
      <h1>{title}</h1>
      <div className="wrapper">
        <div className={`slider-action left ${!controlvisibility ? "none":""}`}>
        <IconButton size="medium" edge="end" className="icon" onClick={() => handleDirection("left")}>
          <ArrowBackIcon />
        </IconButton>
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div className={`slider-action rigth ${!controlvisibility ? "none":""}`}>
        <IconButton size="medium" edge="end" className="icon" onClick={() => handleDirection("right")}>
          <ArrowForwardIcon />
        </IconButton>
        </div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;
  h1 {
    margin-left: 50px;
    font-size: 25px;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .wrapper {
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translateX(0px);
      transition: 1s ease-in-out;
      margin-left: 10px;
    }
    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 2rem;
       bottom: 0;
       width: 50px;
       transition: 0.1s ease-in-out;
      .icon {
        font-size: 2rem;
        cursor: pointer;
        color: white;
      }
    }
    .left {
      left: 0;
    }
    .rigth {
      right: 0;
    }
    .none {
      display: none;
    }
  }
`;
