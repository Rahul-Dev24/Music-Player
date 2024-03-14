import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import SideNav from "./components/SideNav.jsx";
import TrendingSongs from "./components/PlayLists/TrendingSongs.jsx";
import AzizMian from "./components/PlayLists/AzizMian.jsx";
import DurgaDevi from "./components/PlayLists/DurgaDevi.jsx";
import MainPage from "./components/MainPage";
import Albums from "./components/Albums.jsx";
import MixtedSong from "./components/PlayLists/MixtedSong.jsx";

const App = () => {
  // useEffect(() => {
  //   GlobleApi.getSongs();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trending" element={<TrendingSongs />} />
          <Route path="/durgadevi" element={<DurgaDevi />} />
          <Route path="/azzizmian" element={<AzizMian />} />
          <Route path="/Albums" element={<MixtedSong />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
