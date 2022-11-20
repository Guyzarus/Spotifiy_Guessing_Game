import { useState } from "react";
import "./styles.css";

import Artist from "./Artist";
import Song from "./Song";

export default function Game() {
  const [[artistList], [updateArtistList]] = useState([]); // I assume we'll store the songs and arists in arrays
  const [[songsList], [updateSongsList]] = useState([]);

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
