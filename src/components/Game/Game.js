import React, { useState, useContext, useEffect } from "react";
import { ConfigurationContext } from "../../contextState/Context";
import "./styles.css";
import Artist from "./Artist";
import Song from "./Song";
import fetchFromSpotify from "../../services/api";

export default function Game() {
  //const [[artistList], [updateArtistList]] = useState([]); // I assume we'll store the songs and arists in arrays
  //const [[songsList], [updateSongsList]] = useState([]);

  const [artists, setArtists] = useState({});
  const [songs, setSongs] = useState({});
  const { artistCount, setArtistCount } = useContext(ConfigurationContext);
  const { songCount, setSongCount } = useContext(ConfigurationContext);
  const { selectedGenre, setSelectedGenre } = useContext(ConfigurationContext);
  const { token, setToken } = useContext(ConfigurationContext);
  const [answerId, setAnswerId] = useState(0);

  const fetchArtists = async (selectedGenre, artistCount) => {
    let response = await fetchFromSpotify({
      token: token,
      endpoint: `search?q=genre:${selectedGenre}&type=artist&&limit=${artistCount}`,
    }).catch((err) => console.log(err));
    console.log("artists: ", response);
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

  useEffect(() => {
    async function fetchData() {
      await fetchArtists(selectedGenre, artistCount);
    }
    console.log(selectedGenre);
    if (selectedGenre && artistCount) fetchData();
  }, [selectedGenre, setSelectedGenre, artistCount, setArtistCount]);

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * artistCount);
    setAnswerId(artists?.artists?.items[randomNum].id);
    async function fetchData() {
      await fetchSongs(artists?.artists?.items[randomNum].id);
    }
    fetchData();
  }, [artists, setArtists]);

  return (
    <div className="GameContainer">
      <h1>Game Time!</h1>
      <section className="GamePanel">
        <h2 className="Guesses">Guesses Left: 5</h2>
        <h2 className="Timer">60</h2>
        <h2 className="Points">Points Gained: 0</h2>
      </section>
      <section className="MusicPlayer">
        <h2>Song Clips</h2>
        <Song name="1" />
        <Song name="2" />
        <Song name="3" />
      </section>

      <h2>Select the Artist behind the music</h2>
      <section className="ArtistSelector">
        <Artist name="Beyonce" />
        <Artist name="Taylor Swift" />
        <Artist name="Ariana Grande" />
        <Artist name="Selena Gomez" />
      </section>
    </div>
  );
}
