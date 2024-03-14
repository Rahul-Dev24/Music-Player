import React, { useEffect, useState } from "react";
import GlobleApi from "../../Api/GlobleApi";
import SongCard from "./SongCard";
import SongList from "./SongList";
import CircleSongCard from "./CircleSongCard";

const Albums = ({ playMusic }) => {
  const [songs, setSongs] = useState();
  const [Latha, setLatha] = useState();
  const [SheryaGhoshal, setSheryaGhoshal] = useState();
  const [UditNarayan, setUditNarayan] = useState();

  useEffect(() => {
    setSongs(GlobleApi?.ArijitSingh());
    setLatha(GlobleApi?.LathaSongs());
    setSheryaGhoshal(GlobleApi?.SheryaGhoshal());
    setUditNarayan(GlobleApi?.UditNarayan());
  }, []);
  return (
    <>
      <div className="albums">
        <h1>Arijit Singh</h1>
        <div className="album-container containers">
          {songs?.map((item, key) => (
            <SongCard song={item} playMusic={playMusic} key={key} />
          ))}
        </div>
      </div>

      <div className="latha">
        <h1>Lata Mangeshkar</h1>

        {Latha?.map((item, key) => (
          <SongList songs={item} key={key} playMusic={playMusic} />
        ))}
      </div>

      <hr />
      <br />
      <br />
      <h1>Sherya Ghoshal</h1>
      <br />
      <br />
      <div className="SheryaGhoshal">
        {SheryaGhoshal?.map((item, key) => (
          <SongCard song={item} playMusic={playMusic} key={key} />
        ))}
      </div>
      <hr />
      <br />
      <br />
      <h1>Udit Narayan</h1>
      <br />
      <br />
      <div className="UditNarayan" id="UditNarayan">
        {UditNarayan?.map((item, key) => (
          <CircleSongCard
            song={item}
            playMusic={playMusic}
            rounded="50%"
            key={key}
          />
        ))}
      </div>
    </>
  );
};

export default Albums;
