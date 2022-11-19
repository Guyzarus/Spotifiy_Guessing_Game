import { useState } from "react";
import "./styles.css";

import Artist from './Artist';
import Song from "./Song";

export default function Game() {
  const [[artistList], [updateArtistList]] = useState([]); // I assume we'll store the songs and arists in arrays
  const [[songsList], [updateSongsList]] = useState([]);

  return (
    <div className="GameContainer">
      <h2>Song Clips</h2>
      <section className="MusicPlayer">
        <Song
          name="Song 1"
        />
        <Song
          name="Song 2"
        />
        <Song
          name="Song 3"
        />
      </section>

      <h2>Select the Artist behind the music!</h2>
      <section className="ArtistSelector">
        <Artist
          name="Artist 1"
        />
        <Artist
          name="Artist 2"
        />
        <Artist
          name="Artist 3"
        />
        <Artist
          name="Artist 4"
        />
      </section>

      <section className="Timer">
        <p>1:00</p>
      </section>
    </div>
  );
}
