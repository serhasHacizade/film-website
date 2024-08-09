import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayContainer>
      <div className="player">
        <div className="back-arrow">
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            className="m-4 cursor-pointer"
            onClick={() => navigate(-1)}
            id="turn-back"
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4
" autoPlay loop controls muted
        ></video>
      </div>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
.player {
  width: 100vw;
  height: 100vh;
  .back-arrow {
    position: absolute;
    padding: 2rem;
    z-index: 1;
    #turn-back {
      font-size: 3rem;
      cursor: pointer;
      color: white;
    }
  }
  video{
    height: 100%;
    width: 100%;
  }
}`;

export default Player;
