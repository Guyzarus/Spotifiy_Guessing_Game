import React, { useState } from "react";
import { Route } from "react-router-dom";
import { ConfigurationContext } from "../contextState/Context";
import Game from "./Game/Game";
import Home from "./Home";

const App = () => {
  const [songCount, setSongCount] = useState(1);
  const [artistCount, setArtistCount] = useState(2);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <ConfigurationContext.Provider
      value={
        ({ songCount, setSongCount },
        { artistCount, setArtistCount },
        { genres, setGenres },
        { selectedGenre, setSelectedGenre })
      }
    >
      <Route exact path="/" component={Home} />
      <Game />
    </ConfigurationContext.Provider>
  );
};

export default App;
