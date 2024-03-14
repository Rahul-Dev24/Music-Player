import React, { useEffect, useState } from "react";
import GlobleApi from "../../../Api/GlobleApi.js";
import PlayListBanner from "../PlayListBanner";
import SongList from "../SongList";
import RightSide from "../RightSide";

const TrendingSongs = () => {
  const [trending, setTrending] = useState([]);
  const [playThis, setPlayThis] = useState();
  useEffect(() => {
    setTrending(GlobleApi?.trendingSongs());
  }, []);
  const playMusic = (songs) => setPlayThis(songs);

  return (
    <section className="content">
      <div className="left-content">
        <PlayListBanner
          imgSrc={
            "https://th.bing.com/th/id/OIP.Ff9PnzSmNOICelIZEaTuCgHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7"
          }
        />
        <br />
        <div className="recommended-songs">
          <h1>Recommended Songs</h1>
          <div className="songList-container">
            {trending?.map((song, key) => (
              <SongList key={key} playMusic={playMusic} songs={song} />
            ))}
          </div>
        </div>
      </div>
      <RightSide playThis={playThis} />
    </section>
  );
};

export default TrendingSongs;
