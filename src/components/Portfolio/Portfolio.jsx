import React from "react";
import Contact from "../Portfolio/Contact";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook, BsMap } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const iconSpanCSS =
    "flex items-center justify-center w-10 h-10 mr-2 bg-black rounded-full hover:bg-green-600";

  return (
    <div
      id="portfolio"
      className="mt-8 relative py-4 px-0 w-[90%] max-w-screen-xl my-0 mx-auto flex justify-between flex-col gap-12 sm:flex-row sm:gap-0 md:w-4/5"
    >
      <div className="flex-1">
        <Slide direction="left" delay={1}>
          <h1 className="text-green-500 font-bold uppercase text-xl">
            Portfolio
          </h1>
        </Slide>

        <div className="mt-16">
          <Slide direction="left">
            <h1 className="text-xl mb-2">Contact me directly:</h1>
          </Slide>
          <div className="flex items-center gap-2">
            <Slide direction="left">
              <span>
                <FiPhoneCall />
              </span>
              <a
                href="tel:+17806565653"
                className="text-green-300 hover:text-green-600"
              >
                +1 780 656 5653
              </a>
            </Slide>
          </div>
          <div className="flex items-center gap-2">
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
              <a
                href="mailto:Jhorn384@mtroyal.ca"
                className="text-green-300 hover:text-green-600"
              >
                Jhorn384@mtroyal.ca
              </a>
            </Slide>
          </div>
        </div>

        <div className="">
          <Slide direction="left">
            <h1 className="text-xl py-4">Check my profiles</h1>
          </Slide>
          <div className="flex items-center gap-2">
            <Zoom>
              <span className={iconSpanCSS}>
                <a
                  className="text-2xl"
                  href="https://github.com/JarHorner"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className={iconSpanCSS}>
                <a
                  className="text-2xl"
                  href="https://www.linkedin.com/in/jarrethorner/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className={iconSpanCSS}>
                <a
                  className="text-2xl"
                  href="https://www.instagram.com/jarret_horner11/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className={iconSpanCSS}>
                <a
                  className="text-2xl"
                  href="https://www.facebook.com/jarret.horner/"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>

        <div className="flex items-center gap-2 absolute right-12 top-64 sm:relative sm:right-0 sm:top-0">
          <Fade>
            <button
              onClick={scrollUp}
              className="cursor-pointer w-8 h-8 bg-green-500 flex items-center justify-center text-3xl mt-8 hover:bg-green-600"
            >
              <AiOutlineArrowUp />
            </button>
          </Fade>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Portfolio;
