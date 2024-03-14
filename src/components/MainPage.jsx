import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const MainPage = () => {
  const [songs, setSongs] = useState();
  const playMusic = (song) => setSongs(song);

  return (
    <section className="content">
      <LeftSide playMusic={playMusic} />
      <RightSide playThis={songs} />
    </section>
  );
};

export default MainPage;
