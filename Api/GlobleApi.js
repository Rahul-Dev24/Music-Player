import TrendingSongs from "./DataBase/TrendingSongs";
import Arijit_Singh from "./DataBase/Arijit_Singh";
import AzizMian from "./DataBase/PlayList/Aziz Mian";
import DurgaDevi from "./DataBase/PlayList/DurgaDevi";
import Latha_Songs from "./DataBase/Latha";
import Sherya_Ghoshal from "./DataBase/ShreyaGhoshal";
import Udit_Narayan from "./DataBase/UditNarayan";

const trendingSongs = (page = 15) => {
  if (page == null) {
    TrendingSongs.forEach((element) => {
      if (element.id == id) {
        return element;
      }
    });
  } else {
    const data = [];
    for (let i = 0; i < page; i++) {
      data.push(TrendingSongs[i]);
    }
    return data;
  }
};

const trendingAllSongs = () => {
  const data = Sherya_Ghoshal;
  Arijit_Singh?.forEach((ele) => {
    data.push(ele);
  });
  Udit_Narayan?.forEach((ele) => {
    data.push(ele);
  });
  TrendingSongs?.forEach((ele) => {
    data.push(ele);
  });
  return data;
};

const azzizMian = () => {
  return AzizMian;
};

const DurgaDeviSongs = () => {
  return DurgaDevi;
};

const ArijitSingh = () => {
  return Arijit_Singh;
};
const LathaSongs = () => {
  return Latha_Songs;
};

const SheryaGhoshal = () => {
  return Sherya_Ghoshal;
};

const UditNarayan = () => {
  return Udit_Narayan;
};

export default {
  trendingSongs,
  azzizMian,
  DurgaDeviSongs,
  ArijitSingh,
  LathaSongs,
  SheryaGhoshal,
  UditNarayan,
  trendingAllSongs,
};
