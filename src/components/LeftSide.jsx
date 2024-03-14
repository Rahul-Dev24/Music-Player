import React from "react";
import Albums from "./Albums";
import Artists from "./Artists";
import TopBanner from "./TopBanner";

const LeftSide = ({ playMusic }) => {
  return (
    <div className="left-content">
      <TopBanner />
      <Artists />
      <Albums playMusic={playMusic} />
    </div>
  );
};

export default LeftSide;
