import React, { useState } from "react";

import styled from "styled-components";

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("sound has ended!"),
  });

  if (!ready && !loading) return <div>No audio to play</div>;
    margin-bottom: 1rem;
    font-size: 4rem;
  }

  @media (min-width: 70em) {
    h2 {
      font-size: 1.5rem;
    if (loading) return    }
 <div>Loading audio</div>;

const MusicPlayer = ({ children }) => {
  return <StyledMusicPlayer>{children}</StyledMusicPlayer>;
};
