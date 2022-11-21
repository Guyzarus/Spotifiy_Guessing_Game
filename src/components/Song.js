import React from "react";
import styled from "styled-components";

import SongSVG from "../assets/song.svg"

const StyledSong = styled.button`
  border-radius: 100%;
  width: 5rem;
  aspect-ratio: 1;
  margin-inline: auto;
  background-image: url(${SongSVG});
  font-weight: 900;
  font-size: 2rem;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  &:hover {
    border: 1px solid red;
  }
`

const Song = ({ name }) => {
  return (
    <StyledSong>{name}</StyledSong> // needs onclick event for playing song
  );
};

export default Song;
