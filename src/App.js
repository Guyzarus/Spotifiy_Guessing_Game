import React, { useState } from "react";
import { ConfigurationContext } from "./contextState/Context";
import Game from "./screens/Game/Game";
import Home from "./screens/Home/Home";
import EndGame from "./screens/EndGame/EndGame";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const App = () => {
  const [songCount, setSongCount] = useState(1);
  const [artistCount, setArtistCount] = useState(2);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [token, setToken] = useState("");
  const [points, setPoints] = useState(0);

  return (
    <ConfigurationContext.Provider
      value={{
        songCount,
        setSongCount,
        artistCount,
        setArtistCount,
        genres,
        setGenres,
        selectedGenre,
        setSelectedGenre,
        token,
        setToken,
        points,
        setPoints,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Game" element={<Game />}></Route>
        <Route exact path="/score" element={<EndGame />}></Route>
      </Routes>
    </ConfigurationContext.Provider>
  );
};

export default App;
