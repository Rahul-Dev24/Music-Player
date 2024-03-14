import React from "react";

const SongList = ({ songs, playMusic }) => {
  return (
    <>
      <div className="song" onClick={() => playMusic(songs)}>
        <div className="song-img">
          <img src={songs?.cd_img} alt="" />
          <div className="overlay">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div className="song-title">
          <h2>{songs?.song_title}</h2>
          <p>{songs?.singers}</p>
        </div>
        <span>{songs?.duration}</span>
      </div>
    </>
  );
};

export default SongList;
