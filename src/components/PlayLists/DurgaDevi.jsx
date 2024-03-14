import React, { useEffect, useState } from "react";
import SongList from "../SongList";
import PlayListBanner from "../PlayListBanner";
import GlobleApi from "../../../Api/GlobleApi";
import RightSide from "../RightSide";

const DurgaDevi = () => {
  const [DurgaSong, setSong] = useState([]);
  const [playThis, setPlayThis] = useState();
  useEffect(() => {
    setSong(GlobleApi?.DurgaDeviSongs());
  }, []);

  const playMusic = (songs) => setPlayThis(songs);
  return (
    <section className="content">
      <div className="left-content">
        <PlayListBanner
          imgSrc={
            "https://th.bing.com/th/id/OIP.wwSrCSRFTgsveTbIo0-BDwHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7"
          }
        />
        <br />
        <div className="recommended-songs">
          <h1>Recommended Songs</h1>
          <div className="songList-container">
            {DurgaSong?.map((song, key) => (
              <SongList key={key} playMusic={playMusic} songs={song} />
            ))}
          </div>
        </div>
      </div>
      <RightSide playThis={playThis} />
    </section>
  );
};

export default DurgaDevi;
