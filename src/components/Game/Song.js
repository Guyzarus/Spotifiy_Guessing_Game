import React from "react";
import "./styles.css";

const Song = ({ name }) => {
  return (
    <button className="Song">{name}</button> // needs onclick event for playing song
  );
};

export default Song;
