import React, { useState } from "react";
// import { Route } from "react-router-dom";
import { ConfigurationContext } from "../contextState/Context";
import Game from "./Game/Game";
import Home from "./Home";
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
      }}
    >
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Game" element={<Game />}></Route>
      </Routes>
    </ConfigurationContext.Provider>
  );
};

export default App;
