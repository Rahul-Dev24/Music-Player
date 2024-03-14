import React from "react";
import MusicController from "./MusicController";

const RightSide = ({ playThis }) => {
  return (
    <div className="right-content">
      <MusicController playThis={playThis} />
      {/* <MusicController  /> */}
      {/* <div className="music-player">
     
      <div className="album-cover">
        <img src="images/album-cover.png" id="rotatingImage" alt="" />

        <span className="point"></span>
      </div>

      <h2>Redemption</h2>
      <p>Besomorph & Coopex</p>

      <audio id="song">
        <source src="Besomorph-Coopex-Redemption.mp3" type="audio/mpeg" />
      </audio>

      <input type="range" value={0} id="progress" />

      <div className="controls">
        <button className="backward">
          <i className="fa-solid fa-backward"></i>
        </button>
        <button className="play-pause-btn">
          <i className="fa-solid fa-play" id="controlIcon"></i>
        </button>
        <button className="forward">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div> */}
      <div className="recommended-songs">
        {/* <h1>Recommended Songs</h1> */}
        <div className="song-container">
          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ea61baa7-9c4b-4f43-805e-81de5fc8aa2b"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Blank Space</h2>
              <p>Taylor Swift</p>
            </div>
            <span>4:33</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6f72f702-c049-46fe-af76-a3b188b9a909"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>One Dance</h2>
              <p>Drake</p>
            </div>
            <span>4:03</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ad2e664a-3ab9-4f30-933a-623e26999030"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Pawn It All</h2>
              <p>Alicia Keys</p>
            </div>
            <span>3:10</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/666e065b-eb53-4320-a580-30e266370955"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Lose Control</h2>
              <p>Teddy Swims</p>
            </div>
            <span>3:30</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/619ed17f-5df2-4d32-a419-78f120a1aa5c"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Be The One</h2>
              <p>Dua Lipa</p>
            </div>
            <span>3:24</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0ed3f51d-b769-4256-a4dd-8f35b12a1690"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Delicate</h2>
              <p>Taylor Swift</p>
            </div>
            <span>3:54</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/33779e1a-55f9-402a-b004-002395d0fbf1"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Last Christmas</h2>
              <p>Wham!</p>
            </div>
            <span>4:39</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/96bc0648-51f9-46ab-a426-766c6bc93d80"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Paradise</h2>
              <p>Coldplay</p>
            </div>
            <span>4:20</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/885b67a7-1816-4235-9dd3-5d879a202728"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Easy On Me</h2>
              <p>Adele</p>
            </div>
            <span>3:45</span>
          </div>

          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/885b67a7-1816-4235-9dd3-5d879a202728"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Easy On Me</h2>
              <p>Adele</p>
            </div>
            <span>3:45</span>
          </div>
          <div className="song">
            <div className="song-img">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/885b67a7-1816-4235-9dd3-5d879a202728"
                alt=""
              />
              <div className="overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="song-title">
              <h2>Easy On Me</h2>
              <p>Adele</p>
            </div>
            <span>3:45</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
