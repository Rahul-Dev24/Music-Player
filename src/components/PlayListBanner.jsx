import React from "react";

const PlayListBanner = ({ imgSrc }) => {
  return (
    <div className="playList-banner">
      <img src={imgSrc} alt="Loading" />
    </div>
  );
};

export default PlayListBanner;
