import React from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./Project";

// importing images
import movieBrowser from "../../assets/images/projects/Movie_Browser_Webpage.png";
import lootTable from "../../assets/images/projects/Loot_Table.png";
import floppyBat from "../../assets/images/projects/Floppy_Bat.png";
import mysticalCatDash from "../../assets/images/projects/Mystical_Cat_Dash.png";
import wordle from "../../assets/images/projects/Wordle.png";
import strangerLands from "../../assets/images/projects/Stranger_Lands.png";
import zipper from "../../assets/images/projects/Zipper.png";
import selenium from "../../assets/images/projects/Selenium.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

const ProjectsCarousel = () => {
  const slideCSS =
    "flex flex-col items-center bg-center bg-cover h-auto w-[80%] mx-auto";

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
              image={lootTable}
              text="An addon I have built and released on CurseForge for the MMORPG
              World of Warcraft. There is no table in-game that tells you how good the equipment 
              will be depending on the difficulty of the dungeon, so my addon provides that, and more.
              It currently has over 8500 downloads!"
              hasButton2={true}
              button1Name="CurseForge Link"
              button1Link="https://www.curseforge.com/wow/addons/mythicplusloottable"
              button2Name="GitHub Link"
              button2Link="https://github.com/JarHorner/MythicPlusLootTable"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Mystical Cat Dash"
              image={mysticalCatDash}
              text="Mystical Cat Dash is an 3D endless runner game with 2D
              arcane-style 'Flappy bird' sections. It started off as a project for 
              my game development class in university, and I expanded upon the concept, 
              increasing its depth. My friend and I thought the idea of a game
              featuring gameplay of popular mobile games we played as teenagers
              would be a lot of fun. It was also my first time working with 3D."
              hasButton2={true}
              button1Name="itch.io Link"
              button1Link="https://jarhorner.itch.io/mystical-cat-dash"
              button2Name="GitHub Link"
              button2Link="https://github.com/JarHorner/Mystical-Cat-Dash"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Floppy Bat"
              image={floppyBat}
              text="Floppy Bat is a simple, easy-to-play, and fast-paced arcade game. 
              I wanted the experience of publishing an application, so I built a simple
              game based on the original game, Flappy Bird. I learned a lot about developing 
              and polishing an app ready for a store and built it using Unity, in C#."
              hasButton2={false}
              button1Name="Store Link"
              button1Link="https://play.google.com/store/apps/details?id=com.FrydayGames.FloppyBat"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Zipper"
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
              image={wordle}
              text="Wordle+ was an application I started creating when Wordle became the newest
              popluar mobile game. The application works and plays like regular Wordle,
              but I never polished or released it. I built it using Unity, in C#."
              hasButton2={false}
              button1Name="GitHub Link"
              button1Link="https://github.com/JarHorner/Wordle_Clone"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Stanger Lands"
              image={strangerLands}
              text="This game is a passion project of mine that I have been working on-and-off on for a year,
              and its gameplay will be reminiscent of older Legend of Zelda games. It is being build using using Unity
              and all the pixel art in the game will all be made by me as well."
              hasButton2={false}
              button1Name="GitHub Link"
              button1Link="https://github.com/JarHorner/Zelda-Like-Game"
            />
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <Project
              name="Selenium QA Tester"
              image={selenium}
              text="This was an application built using C# Selenium for Alberta Health
              Services, testing this website. I built it from a list of QA tests, and the 
              application ran though each test, checking if certain page elements and information 
              were working or displayed correctly, and links worked. New tests could also easily be 
              added for future use."
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
