import React from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// importing images
import floppyBat from "../../assets/images/Floppy_Bat.jpg";
import movieBrowser from "../../assets/images/Movie_Browser_Webpage.png";
import wordle from "../../assets/images/Wordle.jpg";
import zeldaGame from "../../assets/images/Zelda_Like_Game.png";
import selenium from "../../assets/images/Selenium.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

const ProjectsCarousel = () => {
  const slideCSS = "bg-center bg-cover w-auto h-auto";
  const imgCSS =
    "object-contain block bg-slate-800 w-[350px] h-[300px] sm:w-[550px] sm:h-[450px] md:w-[650px] md:h-[600px] lg:w-[750px] lg:h-[700px]";
  const textCSS = "text-sm w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]";
  const h1CSS =
    "text-3xl absolute top-2 left-6 font-serif font-bold z-50 sm:top-8 sm:text-4xl md:left-12 md:text-5xl";
  const Button1CSS =
    "absolute cursor-pointer bg-green-600 font-medium text-sm custom-shadow hover:hover-custom-shadow px-2 py-1 bottom-40 left-12 sm:bottom-24 sm:px-6 sm:py-2.5 md:left-14 md:px-8 md:py-3";
  const Button2CSS =
    "absolute cursor-pointer bg-green-600 font-medium text-sm custom-shadow hover:hover-custom-shadow px-2 py-1 bottom-40 right-12 sm:bottom-24 sm:px-6 sm:py-2.5 md:right-14 md:px-8 md:py-3";

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
              Floppy Bat is a simple, easy-to-play, and control game. I wanted
              the experience of publishing an application, so i built a simple
              game based on Flappy Bird. I learned a lot about developing and
              polishing an app ready for a store and built it using Unity, in
              C#.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Wordle+</h1>
            <a
              href="https://github.com/JarHorner/Wordle_Clone"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <img src={wordle} className={imgCSS}></img>
            <p className={textCSS}>
              Wordle+ was an application I started creating when Wordle became a
              phenomenon. The application works and plays like regular Wordle,
              but I never polished or released it. I built it using Unity, in
              C#.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Mythic + Loot Table</h1>
            <a
              href="https://github.com/JarHorner/MythicPlusLootTable"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <img src={wordle} className={imgCSS}></img>
            <p className={textCSS}>
              This is an addon I am building for the MMORPG World of Warcraft.
              Mythic + is a group activity and based on the difficulty, better
              loot is given. There is no table in-game that tells you how
              powerful the loot will be, so my addon does that.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>
              <a
                href="https://web3moviebrowser.netlify.app/"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Movie Browser
              </a>
            </h1>
            <a
              href="https://github.com/JarHorner/Web3-Movie-Browser"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <a
              href="https://github.com/JarHorner/Web3-Movie-Browser-API"
              target="_blank"
              className={Button2CSS}
            >
              API GitHub Link
            </a>
            <img src={movieBrowser} className={imgCSS}></img>
            <p className={textCSS}>
              The movie browser website I built for one of my University
              projects with a friend. It is a single-page website built using
              react.js that searches though movies and provides info. The API it
              uses contains dummy movie data and was also made by us, using
              node.js.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Zelda-like Game</h1>
            <a
              href="https://github.com/JarHorner/Zelda-Like-Game"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <img src={zeldaGame} className={imgCSS}></img>
            <p className={textCSS}>
              This game is a passion project of mine that does not have a
              finalized name yet, but its gameplay will be reminiscent of older
              Legend of Zelda games. It is being build using using Unity, in C#.
              All the pixel art in the game will all be made my me as well.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>University Program</h1>
            <a
              href="https://github.com/JasmailDuck/university-admission-tool"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <a
              href="https://github.com/JasmailDuck/university-admission-tool-server"
              target="_blank"
              className={Button2CSS}
            >
              API GitHub Link
            </a>
            <img className={imgCSS}></img>
            <p className={textCSS}>
              The university program website was built for one of my University
              projects with a group of 5. It was built using react.js for the
              front-end and node.js for the back-end. It is a tool used by a
              student studying abroad in Canada, to see what programs or club
              they may be able to join based on their interests and grades.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Stock Tracker</h1>
            <a
              href="https://github.com/JarHorner/Web2_Stock_Website"
              target="_blank"
              className={Button1CSS}
            >
              GitHub Link
            </a>
            <img className={imgCSS}></img>
            <p className={textCSS}>
              The stock tracker website I built for one of my University
              projects with a friend. It was one of the first websites I ever
              built, and I recently went back to polish it. It is build only
              using basic HTML, CSS, and JS.
            </p>
          </SwiperSlide>
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>
              <a
                href="https://myhealth.alberta.ca/"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Selenium QA Tester
              </a>
            </h1>
            <p className="absolute text-xs bottom-40 left-12 sm:text-lg sm:bottom-32 md:left-14 md:bottom-28">
              This was the website my appliction tested
            </p>
            <img src={selenium} className={imgCSS}></img>
            <p className={textCSS}>
              This was an application built using Selenium C# for Alberta Health
              Services. I built it from a QA checklist, and the application ran
              though each point, testing if page elements and information were
              correct and links worked. New tests could also easily be added for
              future use.
            </p>
          </SwiperSlide>
        </Swiper>
      </Slide>
    </div>
  );
};

export default ProjectsCarousel;
