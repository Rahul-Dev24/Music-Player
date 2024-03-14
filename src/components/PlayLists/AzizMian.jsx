import React, { useEffect, useState } from "react";
import GlobleApi from "../../../Api/GlobleApi.js";
import PlayListBanner from "../PlayListBanner";
import RightSide from "../RightSide.jsx";
import SongList from "../SongList";

const AzizMian = () => {
  const [AzizMian, setAzizMian] = useState([]);
  const [playThis, setPlayThis] = useState();
  useEffect(() => {
    setAzizMian(GlobleApi?.azzizMian());
  }, []);
  const playMusic = (songs) => setPlayThis(songs);
  return (
    <section className="content">
      <div className="left-content">
        <PlayListBanner
          imgSrc={
            "https://tse1.mm.bing.net/th?&id=OVP.fKHTcF3BWNvBT-LaPMwSDAEsDh&w=311&h=180&c=7&pid=2.1&rs=1"
          }
        />
        <br />
        <div className="recommended-songs">
          <h1>Recommended Songs</h1>
          <div className="songList-container">
            {AzizMian?.map((song, key) => (
              <SongList key={key} playMusic={playMusic} songs={song} />
            ))}
          </div>
        </div>
      </div>
      <RightSide playThis={playThis} />
    </section>
  );
};

export default AzizMian;
