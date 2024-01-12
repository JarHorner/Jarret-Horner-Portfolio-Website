import React from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./Project";

// importing images
import movieBrowser from "../../assets/images/Movie_Browser_Webpage.png";
import lootTable from "../../assets/images/Loot_Table.png";
import floppyBat from "../../assets/images/Floppy_Bat.png";
import mysticalCatDash from "../../assets/images/Mystical_Cat_Dash.png";
import wordle from "../../assets/images/Wordle.png";
import zeldaGame from "../../assets/images/Zelda_Like_Game.png";
import zipper from "../../assets/images/Zipper.png";
import selenium from "../../assets/images/Selenium.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";
import {
  HorizontalImageContainer,
  VerticalImageContainer,
} from "../Helpers/ImageContainer";

const ProjectsCarousel = () => {
  const slideCSS =
    "flex flex-col items-center bg-center bg-cover h-auto w-[80%] mx-auto";
  const textCSS =
    "text-sm w-[350px] sm:w-[450px] lg:w-[600px] xl:w-[800px] relative translate-x-[-50%] translate-y-[-50%] left-[50%] bottom-[-40px] ";
  const h1CSS = "text-3xl font-serif font-bold z-50 sm:text-4xl md:text-5xl ";
  const Button1CSS =
    "cursor-pointer bg-green-600 font-medium text-sm mt-4 custom-shadow hover:hover-custom-shadow px-2 py-1 sm:px-6 sm:py-2.5 md:px-8 md:py-3 fixed translate-x-[-50%] translate-y-[-50%] left-[50%] bottom-[40px]";
  const Button2CSS =
    "cursor-pointer bg-green-600 font-medium text-sm mt-4 custom-shadow hover:hover-custom-shadow px-2 py-1 sm:px-6 sm:py-2.5 md:px-8 md:py-3 fixed translate-x-[-50%] translate-y-[-50%] left-[50%] bottom-[-20px]";

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
            <Project
              name="Movie Browser"
              verticalImage={false}
              image={movieBrowser}
              text="A movie browser website I built for one of my University projects
              with a friend. It is a single-page website built using react.js
              that searches though movies and provides info. The API it uses
              contains dummy movie data and was also made by us, using node.js."
              hasButton2={true}
              button1Name="Webpage Link"
              button1Link="https://web3moviebrowser.netlify.app/"
              button2Name="GitHub Link"
              button2Link="https://github.com/JarHorner/Web3-Movie-Browser"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Mythic Plus Loot Table"
              verticalImage={false}
              image={lootTable}
              text="An addon I have built and released on CurseForge for the MMORPG
              World of Warcraft. Mythic plus is a group activity and based on
              the difficulty, better equipment is given. There is no table
              in-game that tells you how good the equipment will be, so my addon
              provides that, and more."
              hasButton2={true}
              button1Name="Curse Forge Link"
              button1Link="https://www.curseforge.com/wow/addons/mythicplusloottable"
              button2Name="GitHub Link"
              button2Link="https://github.com/JarHorner/MythicPlusLootTable"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Floppy Bat"
              verticalImage={false}
              image={floppyBat}
              text="Floppy Bat is a simple, easy-to-play, and control game. I wanted
              the experience of publishing an application, so i built a simple
              game based on Flappy Bird. I learned a lot about developing and
              polishing an app ready for a store and built it using Unity, in
              C#."
              hasButton2={false}
              button1Name="Store Link"
              button1Link="https://play.google.com/store/apps/details?id=com.FrydayGames.FloppyBat"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Mystical Cat Dash"
              verticalImage={false}
              image={mysticalCatDash}
              text="Mystical Cat Dash is an 3D endless runner game with 2D
              arcane-style 'Flappy bird' sections. thought the idea of a game
              featuring gameplay of popular mobile games we played as teenagers
              was fun. It started off as a project for my game development class
              in university, and I expanded upon the concept, increasing its
              depth. We thought the idea of a game featuring gameplay of popular
              mobile games we played as teenagers was fun. It was also my first
              time working with 3D."
              hasButton2={true}
              button1Name="itch.io Link"
              button1Link="https://jarhorner.itch.io/mystical-cat-dash"
              button2Name="GitHub Link"
              button2Link="https://github.com/JarHorner/Mystical-Cat-Dash"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Zipper"
              verticalImage={false}
              image={zipper}
              text="A simple application that zips and unzips files and is built using
              JavaFX, a client application platform for desktop, mobile and
              embedded systems built on Java. I also used Maven to manage the
              projects build and learn a project management tool."
              hasButton2={false}
              button1Name="GitHub Link"
              button1Link="https://github.com/JarHorner/Zipper"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Wordle+"
              verticalImage={true}
              image={wordle}
              text="Wordle+ was an application I started creating when Wordle became a
              phenomenon. The application works and plays like regular Wordle,
              but I never polished or released it. I built it using Unity, in
              C#."
              hasButton2={false}
              button1Name="GitHub Link"
              button1Link="https://github.com/JarHorner/Wordle_Clone"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Stanger Lands"
              verticalImage={false}
              image={zeldaGame}
              text="This game is a passion project of mine that does not have a
              finalized name yet, but its gameplay will be reminiscent of older
              Legend of Zelda games. It is being build using using Unity, in C#.
              All the pixel art in the game will all be made my me as well."
              hasButton2={false}
              button1Name="GitHub Link"
              button1Link="https://github.com/JarHorner/Zelda-Like-Game"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Selenium QA Tester"
              verticalImage={false}
              image={selenium}
              text="This was an application built using Selenium C# for Alberta Health
              Services, testing this website. I built it from a QA requirements
              list, and the application ran though each point, testing if page
              elements and information were correct, and links worked. New tests
              could also easily be added for future use."
              hasButton2={false}
              button1Name="Website Link"
              button1Link="https://myhealth.alberta.ca/"
            />
          </SwiperSlide>
        </Swiper>
      </Slide>
    </div>
  );
};

export default ProjectsCarousel;
