import React, { useState } from "react";
// import styled from "styled-components";
import { AudioPlayerProvider } from "react-use-audio-player";
import { useAudioPlayer } from "react-use-audio-player";

const App = () => {
  return (
    <AudioPlayerProvider>
      <AudioPlayer file="CharlieLastNameWilson.mp3" />
    </AudioPlayerProvider>
  );
};

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("sound has ended!"),
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

const PlayBar = () => {
  const { percentComplete, duration, seek } = useAudioPosition({ highRefreshRate: true })
  
  const goToPosition = React.useCallback((percentage) => {
      seek(duration * percentage)
  }, [duration, seek])

  return <ProgressBar percentComplete={percentComplete} onBarPositionClick={goToPosition} />
}

export default AudioPlayer;
// const StyledMusicPlayer = styled.div`
//   display: grid;
//   flex-direction: row;
//   align-content: center;
//   margin-top: 20px;
//   padding-bottom: 20px;
//   max-width: 500px;
//   align-items: center;
//   border: 1px solid #eeeeee;
//   box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.07);
//   width: 100%;
//   height: 130px;
//   grid-template-columns: 3;
//   grid-gap: 1rem;
//   min-width: 100%;
//   height: 100%;
//   padding-bottom: 2rem;
//   justify-content: space-evenly;

//   h2 {
//     text-align: center;
//     grid-column: 1 / 4;
//     margin-bottom: 0.5rem;
//   }
// `;

// const MusicPlayer = ({ children }) => {
//   return <StyledMusicPlayer>{children}</StyledMusicPlayer>;
// };

