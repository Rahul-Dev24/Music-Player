import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MusicController = ({ playThis }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [favrate, setFavrate] = useState(false);

  const audioRef = useRef();

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  function formateDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const second = Math.floor(durationSeconds % 60);
    const formattedTime = second.toString().padStart(2, "  ");
    return `${minutes}:${formattedTime}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    // clean up
    // return () => {
    //   audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    // };
  }, []);

  useEffect(() => {
    setFavrate(
      JSON.parse(localStorage.getItem("Favrate"))[0].song_id ===
        playThis?.song_id
    );
  }, [playThis]);

  const addToFav = () => {
    if (playThis) {
      // let datageting = localStorage.getItem("Favrate");
      // let data = JSON.parse(datageting);
      let arrayData = [playThis];
      let sending = JSON.stringify(arrayData);
      localStorage.setItem("Favrate", sending);
      setFavrate(
        JSON.parse(localStorage.getItem("Favrate"))[0].song_id ===
          playThis?.song_id
      );
      // console.log(arrayData);
    }
  };
  console.log(
    JSON.parse(localStorage.getItem("Favrate"))[0].song_id === playThis?.song_id
  );

  return (
    <div className="controller-container">
      <div className="player-card">
        <h3 style={{ textAlign: "center" }}>
          {playThis !== undefined ? playThis.singers : "Loading Plz wait"}
        </h3>
        <h4 style={{ textAlign: "center" }}>
          {playThis !== undefined ? playThis.song_title : "Loading..."}
        </h4>
        {playThis != undefined ? (
          <img src={playThis.cd_img} alt="" />
        ) : JSON.parse(localStorage.getItem("Favrate"))[0] == undefined ? (
          <img className="loader" src="./music-loader.gif" alt="" />
        ) : (
          <img src={JSON.parse(localStorage.getItem("Favrate"))[0]?.cd_img} />
        )}
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />

        <audio
          ref={audioRef}
          src={
            playThis !== undefined
              ? playThis.url
              : JSON.parse(localStorage.getItem("Favrate"))[0] == undefined
              ? "mp4:https://1135948262.rsc.cdn77.org/mp4/h/102455/hp002093-1aajmausam.m4a"
              : JSON.parse(localStorage.getItem("Favrate"))[0]?.url
          }
        />

        <div className="track-duration">
          <p>{formateDuration(currentTime)}</p>
          <p>{formateDuration(duration)}</p>
        </div>
        <button onClick={handlePlayPause}>
          <span className="material-symbols-rounded">
            {isPlaying ? (
              <img src="./pause.svg" width={20} height={20} />
            ) : (
              <img src="./play.svg" width={20} height={20} />
            )}
          </span>
        </button>

        {favrate ? (
          <h1 className="filled-heart">❤</h1>
        ) : (
          <i className="fa-regular fa-heart heart" onClick={addToFav}></i>
        )}

        <Link to="/Albums">
          <i className="fa-brands fa-tiktok tiktok"></i>
        </Link>
      </div>
    </div>
  );
};

export default MusicController;
