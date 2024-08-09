/* eslint-disable no-unused-vars */

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CheckIcon from "@mui/icons-material/Check";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Card = () => {
  const navigate = useNavigate();
  const [onHovered, setOnHovered] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU
"
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU
      "
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4
"
              autoPlay
              loop
              controls
              muted
            ></video>
          </div>
          <div className="info-container">
            <h3 className="movie-name" onClick={() => navigate("/player")}>
              Black Adam
            </h3>
            <div className="icons">
              <div className="controls">
                <IconButton
                  size="small"
                  className="icon"
                >
                  <PlayCircleFilledWhiteIcon />
                </IconButton>
                <IconButton
                  size="small"
                  className="icon"
                >
                  <ThumbUpIcon />
                </IconButton>
                <IconButton
                  size="small"
                  className="icon"
                >
                  <ThumbDownIcon />
                </IconButton>
                <IconButton
                  size="small"
                  className="icon"
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  size="small"
                  className="icon"
                >
                  <AddCircleOutlineIcon />
                </IconButton>

              </div>
              <div className="info">
                <IconButton
                  size="small"
                  className="icon"
                  title="more info"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>Action</li>
                <li>Action</li>
                <li>Action</li>
                <li>Action</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  background-color: red;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }.hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0%.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0ms.3s ease-out;
    .image-video-wrapper {
        position: relative;
        height: 140px;
        img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
    }
    .info-container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
    }
    .icons {
        display: flex;
        justify-content: space-between;
        .controls {
            display: flex;
            gap: 1rem;
        }
        .icon {
            color: white;
            border-radius: 50%;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
                color: #b8b8b8;
            }
        }
    }
  }
`;
export default Card;
