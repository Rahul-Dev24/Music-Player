import React from "react";

const CircleSongCard = ({ song, playMusic }) => {
  return (
    <div className="album " onClick={() => playMusic(song)}>
      <div className="album-frame circle">
        <img src={song.cd_img} alt="" />
      </div>
      <div>
        <h2>Play Now</h2>
        <p>{song.song_title}</p>
      </div>
    </div>
  );
};

export default CircleSongCard;
