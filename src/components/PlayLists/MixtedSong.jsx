import React, { useEffect, useState } from "react";
import GlobleApi from "../../../Api/GlobleApi";
import PlayListBanner from "../PlayListBanner";
import RightSide from "../RightSide";
import SongCard from "../SongCard";

const MixtedSong = () => {
  const [DurgaSong, setSong] = useState([]);
  const [playThis, setPlayThis] = useState();
  useEffect(() => {
    setSong(GlobleApi?.trendingAllSongs());
  }, []);

  const playMusic = (songs) => setPlayThis(songs);
  return (
    <section className="content">
      <div className="left-content">
        <div className="recommended-songs">
          <h1>Recommended Songs</h1>
          <div className="MixtedList-container">
            {DurgaSong?.map((song, key) => (
              <SongCard key={key} playMusic={playMusic} song={song} />
            ))}
          </div>
        </div>
      </div>
      <RightSide playThis={playThis} />
    </section>
  );
};

export default MixtedSong;
