import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="main-menu">
      <div>
        <div className="user-info">
          <img
            src="https://avatars.githubusercontent.com/u/149306097?v=4"
            alt="user"
          />
          <p>Rahul Singh</p>
        </div>
        <ul>
          <li className="nav-item active">
            <Link to="/">
              <i className="fa fa-map nav-icon"></i>
              <span className="nav-text">Discover</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/trending">
              <i className="fa fa-arrow-trend-up nav-icon"></i>
              <span className="nav-text">Trending</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Albums">
              <i className="fa fa-compact-disc nav-icon"></i>
              <span className="nav-text">Album</span>
            </Link>
          </li>

          <li className="nav-item">
            <a href="#">
              <i className="fa fa-circle-play nav-icon"></i>
              <span className="nav-text">Playlist</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#">
              <i className="fa fa-heart nav-icon"></i>
              <span className="nav-text">Favorites</span>
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li className="nav-item">
          <a href="#">
            <i className="fa fa-user nav-icon"></i>
            <span className="nav-text">Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#">
            <i className="fa fa-gear nav-icon"></i>
            <span className="nav-text">Settings</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#">
            <i className="fa fa-right-from-bracket nav-icon"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
