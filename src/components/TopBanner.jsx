import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <>
      <div className="slider-container">
        <h1>Popular Playlist</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Link to="/trending">
              <div className="swiper-slide">
                <img src="https://th.bing.com/th/id/OIP.Ff9PnzSmNOICelIZEaTuCgHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7" />
                <div className="slide-overlay">
                  <h2>Treanding Now</h2>
                  <button>
                    Listen Now <i className="fa-solid fa-circle-play"></i>
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/durgadevi">
              <div className="swiper-slide">
                <img src="https://th.bing.com/th/id/OIP.wwSrCSRFTgsveTbIo0-BDwHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7" />
                <div className="slide-overlay">
                  <h2>Durga-Devi Tones</h2>
                  <button>
                    Listen Now <i className="fa-solid fa-circle-play"></i>
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/azzizmian">
              <div className="swiper-slide">
                <img src="https://tse1.mm.bing.net/th?&id=OVP.fKHTcF3BWNvBT-LaPMwSDAEsDh&w=311&h=180&c=7&pid=2.1&rs=1" />
                <div className="slide-overlay">
                  <h2>Aziz Mian</h2>
                  <button>
                    Listen Now <i className="fa-solid fa-circle-play"></i>
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/20c8fdd5-9f4a-4917-ae90-0239a52e8334" />
              <div className="slide-overlay">
                <h2>Smooth Jazz Journey</h2>
                <button>
                  Listen Now <i className="fa-solid fa-circle-play"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopBanner;
