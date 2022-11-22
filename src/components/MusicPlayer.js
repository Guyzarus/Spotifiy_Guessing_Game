import React, { useState } from "react";
// import CharlieLastNameWilson from "../audio/CharlieLastNameWilson";
import styled from "styled-components";

const StyledMusicPlayer = styled.div`
  display: grid;
  flex-direction: row;
  align-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  max-width: 500px;
  align-items: center;
  border: 1px solid #eeeeee;
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.07);
  width: 100%;
  height: 130px;
  grid-template-columns: 3;
  grid-gap: 1rem;
  min-width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  justify-content: space-evenly;

  h2 {
    text-align: center;
    grid-column: 1 / 4;
    margin-bottom: 0.5rem;
  }
`;

const MusicPlayer = ({ children }) => {
  return <StyledMusicPlayer>{children}</StyledMusicPlayer>;
};

// {/* <audio
//   id="current-song"
//   preload="true"
//   loop
//   autoPlay
//   src={
//     song === "CharlieLastNameWilson"
//       ? CharlieLastNameWilson
//       : song === "CharlieLastNameWilson"
//   }
// />;
// const songList = ["CharlieLastNameWilson"];
// return (
//   <div className="menu--list">
//     {songList.map((song) => (
//       <h3
//         className="menu--item"
//         key={song}
//         onClick={() => handleSongChange(song)}
//       >
//         {song}
//       </h3>
//     ))}
//   </div>
// );

// const [entered, triggerEntered] = useState(false);
// const handleEnter = () => {
//   triggerEntered(true);
//   const audio = document.getElementById("current-song");
//   audio.play();
// };
// {
//   !entered ? <LoadScreen handleEnter={handleEnter} /> : null;
// } */}

export default MusicPlayer;
