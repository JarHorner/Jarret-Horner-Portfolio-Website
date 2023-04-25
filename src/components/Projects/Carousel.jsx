import React from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// importing images
import floppyBat from "../../assets/images/Floppy_Bat.jpg";
import movieBrowser from "../../assets/images/Movie_Browser_Webpage.png";
import wordle from "../../assets/images/Wordle.jpg";
import zeldaGame from "../../assets/images/Zelda_Like_Game.png";

import toast, { Toaster } from "react-hot-toast";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

const Carousel = () => {
  const slideCSS = "bg-center bg-cover w-auto h-auto";
  const imgCSS =
    "object-contain block bg-slate-900 w-[350px] h-[300px] sm:w-[550px] sm:h-[450px] md:w-[650px] md:h-[600px] lg:w-[750px] lg:h-[700px]";
  const textCSS = "text-sm w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]";
  const h1CSS =
    "text-3xl absolute top-4 left-6 font-serif font-bold z-50 sm:top-8 sm:text-4xl md:left-12 md:text-5xl";
  const Button1CSS =
    "absolute cursor-pointer bg-green-600 font-medium custom-shadow hover:hover-custom-shadow px-2 py-1 bottom-20 left-12 sm:left-12 sm:bottom-16 sm:px-6 sm:py-2.5 md:left-16 md:px-8 md:py-3";

  return (
    <div className="">
      <Slide direction="left">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            clickable: true,
          }}
          pagination={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="w-full pt-4 pb-12"
        >
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Floppy Bat</h1>
            <a
              href="https://play.google.com/store/apps/details?id=com.FrydayGames.FloppyBat"
              target="_blank"
              className={Button1CSS}
            >
              Store Link
            </a>
            <img src={floppyBat} className={imgCSS}></img>
            <p className={textCSS}>
              Floppy Bat is a simple, easy-to-play, and control game. The higher
              your score gets, the faster your bat flies, steadily increasing
              difficulty.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Wordle</h1>
            <img src={wordle} className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Movie Browser</h1>
            <img src={movieBrowser} className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Zelda-like Game</h1>
            <img src={zeldaGame} className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>University Program Tool</h1>
            <img className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Stock Tracker</h1>
            <img className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Supply Webapp</h1>
            <img className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Movie API</h1>
            <img className={imgCSS}></img>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Selenium QA Tester</h1>
            <img className={imgCSS}></img>
          </SwiperSlide>
        </Swiper>
      </Slide>
    </div>
  );
};

export default Carousel;
