import React, { useState, useContext, useEffect } from "react";
import { ConfigurationContext } from "../../contextState/Context";
import fetchFromSpotify from "../../services/api";
import styled from "styled-components";

import Artist from "../../components/Artist";
import Song from "../../components/Song";
import Points from "../../components/Points";
import Guesses from "../../components/Guesses";
import Timer from "../../components/Timer";
import GamePanel from "../../components/GamePanel";
import MusicPlayer from "../../components/MusicPlayer";
import ArtistSelector from "../../components/ArtistSelector";

export default function Game() {
  const [artists, setArtists] = useState({});
  const [songs, setSongs] = useState({});
  const { artistCount, setArtistCount } = useContext(ConfigurationContext);
  const { songCount, setSongCount } = useContext(ConfigurationContext);
  const { selectedGenre, setSelectedGenre } = useContext(ConfigurationContext);
  const { token, setToken } = useContext(ConfigurationContext);
  const [answerId, setAnswerId] = useState(0);
  const [points, setPoints] = useState(0);
  const [guesses, setGuesses] = useState(5);

  const fetchArtists = async (selectedGenre, artistCount) => {
    const randomOffset = Math.floor(Math.random() * 1000);
    let response = await fetchFromSpotify({
      token: token,
      endpoint: `search?q=genre:${selectedGenre}&type=artist&offset=${randomOffset}&limit=${artistCount}`,
    }).catch((err) => console.log(err));
    console.log("artists: ", response);
    setArtists(response);
  };

  const fetchSongs = async (artistId) => {
    let response = await fetchFromSpotify({
      token,
      endpoint: `artists/${artistId}/top-tracks?country=US`,
    }).catch((err) => console.log(err));
    // console.log("songs", response);
    return setSongs(response);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchArtists(selectedGenre, artistCount);
    }
    // console.log(selectedGenre);
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

  // Checks the incoming artist.id against the AnswerID to determine if correct
  const checkAnswer = artistID => {
    if (artistID === answerId) {
      console.log("Correct Artist")
      setPoints(points + 1);
    }
    else {
      console.log("Incorrect Artist")
      if (guesses > 0) {
        setGuesses(guesses - 1);
      }
      else {
        // Redirect to score screen
      }
    }

    fetchArtists(selectedGenre, artistCount);
  }

  const StyledGame = styled.div`
    width: 600px;
    display: block;
    margin: 4rem auto;
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
  `

  return (
    <StyledGame>
      <h1>Game Time!</h1>
      <GamePanel>
        <Guesses guessTotal={guesses} />
        <Timer timesUp={() => checkAnswer(null)} />
        <Points pointTotal={points} />
      </GamePanel>
      <MusicPlayer>
        <h2>Song Clips</h2>
        <Song name="1" />
        <Song name="2" />
        <Song name="3" />
      </MusicPlayer>

      <ArtistSelector>
        <h2>Select the Artist behind the music</h2>
        {artists?.artists?.items?.map((artist) => (
          <Artist
            key={artist.name + artist.id}
            name={artist.name}
            answer={() => checkAnswer(artist.id)}
          />
        ))}
      </ArtistSelector>
    </StyledGame>
  );
}
