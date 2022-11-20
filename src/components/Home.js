import React, { useContext, useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import fetchFromSpotify, { request } from "../services/api";
import { ConfigurationContext } from "../contextState/Context";
import "./styles.css";

const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const { selectedGenre, setSelectedGenre } = useContext(ConfigurationContext);
  const [authLoading, setAuthLoading] = useState(false);
  const [configLoading, setConfigLoading] = useState(false);
  const [token, setToken] = useState("");
  const [artists, setArtists] = useState({});
  const [songs, setSongs] = useState({});
  const [answerId, setAnswerId] = useState(0);

  //logic to setSongs
  const [songCount, setSongCount] = useState(1);

  //logic to setArtist
  const [artistCount, setArtistCount] = useState(2);

  const loadGenres = async (t) => {
    setConfigLoading(true);
    const response = await fetchFromSpotify({
      token: t,
      endpoint: "recommendations/available-genre-seeds",
    });
    console.log(response);
    setGenres(response.genres);
    setConfigLoading(false);
  };

  const fetchArtists = async (selectedGenre, artistCount) => {
    let response = await fetchFromSpotify({
      token: token,
      endpoint: `search?q=genre:${selectedGenre}&type=artist&&limit=${artistCount}`,
    }).catch((err) => console.log(err));

    setArtists(response);
  };

  const fetchSongs = async (artistId) => {
    let response = await fetchFromSpotify({
      token,
      endpoint: `artists/${artistId}/top-tracks?country=US`,
    }).catch((err) => console.log(err));
    console.log("songs", response);
    return setSongs(response);
  };

  const submitHandler = async () => {
    await fetchArtists(selectedGenre, artistCount);
  };
  const songCountHandler = (e) => {
    setSongCount(e.target.value);
  };

  const artistCountHandler = (e) => {
    setArtistCount(e.target.value);
  };

  useEffect(() => {
    setAuthLoading(true);
    const storedTokenString = localStorage.getItem(TOKEN_KEY);
    if (storedTokenString) {
      const storedToken = JSON.parse(storedTokenString);
      if (storedToken.expiration > Date.now()) {
        console.log("Token found in localstorage");
        setAuthLoading(false);
        setToken(storedToken.value);
        loadGenres(storedToken.value);
        return;
      }
    }
    console.log("Sending request to AWS endpoint");
    request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
      const newToken = {
        value: access_token,
        expiration: Date.now() + (expires_in - 20) * 1000,
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
      setAuthLoading(false);
      setToken(newToken.value);
      loadGenres(newToken.value);
    });
  }, []);

  useEffect(() => {
    console.log("artist", artists);
    let randomNum = Math.floor(Math.random() * artistCount);
    console.log(randomNum);
    setAnswerId(artists?.artists?.items[randomNum].id);
    async function fetchData() {
      await fetchSongs(artists?.artists?.items[randomNum].id);
    }
    fetchData();
  }, [artists, setArtists]);

  if (authLoading || configLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="configurationDiv">
      <div>{`Settings: genre = ${selectedGenre}, songs= ${songCount}, artists = ${artistCount} `}</div>
      {console.log(artists)}
      <h1>Lets get your game started! </h1>
      <div className="ChoiceDiv">
        <h1 className="title">Pick a Genre</h1>
        <select
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
        >
          <option value="" />
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="ChoiceDiv">
        <h1 className="title">Pick the Number of songs </h1>
        <div className="songButtonDiv">
          <button
            className="choiceButton"
            value={1}
            onClick={(e) => songCountHandler(e)}
          >
            {" "}
            1{" "}
          </button>
          <button
            className="choiceButton"
            value={2}
            onClick={(e) => songCountHandler(e)}
          >
            {" "}
            2{" "}
          </button>
          <button
            className="choiceButton"
            value={3}
            onClick={(e) => songCountHandler(e)}
          >
            3
          </button>
        </div>
      </div>
      <div className="ChoiceDiv">
        <h1 className="title">Pick the Number of artists </h1>
        <div className="artistButtonDiv">
          <button
            className="choiceButton"
            value={2}
            onClick={(e) => artistCountHandler(e)}
          >
            {" "}
            2{" "}
          </button>
          <button
            className="choiceButton"
            value={3}
            onClick={(e) => artistCountHandler(e)}
          >
            {" "}
            3{" "}
          </button>
          <button
            className="choiceButton"
            value={4}
            onClick={(e) => artistCountHandler(e)}
          >
            {" "}
            4{" "}
          </button>
        </div>
      </div>
      <a>
        {" "}
        <button onClick={submitHandler} className="startGameText">
          {" "}
          Start Game{" "}
        </button>
      </a>
    </div>
  );
};

export default Home;
