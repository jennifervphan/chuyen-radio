import React from "react";
import styled from "@emotion/styled";

import PlayIcon from "../assets/images/play.png";
import PauseIcon from "../assets/images/pause.png";
import useAudioPlayer from "../hooks/useAudioPlayer";

const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  width: 100%;
  
  font-family: 'Roboto light';
`;

const RadioEpisode: React.FC = () => {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const icon = playing ? PauseIcon : PlayIcon;

  return (
    <EpisodeContainer>
      <img src={icon} onClick={() => setPlaying(!playing)} />
      <audio id="audio">
        <source src="../data/01.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <p>example description</p>
    </EpisodeContainer>);
};

export default RadioEpisode;
