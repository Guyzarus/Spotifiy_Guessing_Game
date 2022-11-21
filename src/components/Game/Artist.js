import React from "react";
import "./styles.css";

const Artist = ({ name }) => {
  return (
    <button>{name}</button> // needs onclick event of choosing this artist
  );
};

export default Artist;
