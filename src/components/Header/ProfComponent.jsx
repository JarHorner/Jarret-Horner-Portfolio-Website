import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const spanCSS =
    "w-10 h-9 relative bg-green-500 clip-icons ease-in-out-transform hover:rotate ";
  const aCSS =
    "text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 ";

  const linkToEmail = () => {};

  return (
    <div
      id="home"
      className="flex flex-col gap-8 pt-12 w-[90%] my-0 mx-auto max-w-screen-xl z-1 sm:flex-row md:w-4/5"
    >
      <Slide direction="left">
        <div className="flex-1">
          <h4 className="py-4 px-0 font-medium">
            Hello! <span className="">My name is</span>
          </h4>
          <h1 className="text-4xl tracking-wide pb-1 font-serif text-green-500">
            Jarret Horner
          </h1>
          <h3 className="font-medium text-xl capitalize">
            4th year CIS Student &
          </h3>
          <h3 className="font-medium text-xl pb-5 capitalize">
            Future Software Developer
          </h3>
          <p className="font-light pb-12 w-4/5">
            Always enthusiastic to learn more about new technologies. Previously
            worked in an internship with Alberta Health Services Personal Health
            Portal team, performing Quality Assurance testing and creating an
            automation application. In my past jobs, I have learned how to
            provide amazing customer service, excellent team cooperation, and
            manage time effectively. Passionate about the innovative world of
            technology and the possibilities that come with it.
          </p>
          <a
            href="#portfolio"
            className="px-8 py-2.5 mt-12 cursor-pointer bg-green-600 text-white font-medium 
                        custom-shadow hover:hover-custom-shadow"
          >
            Let's talk
          </a>
          <div className="mt-12 flex items-center gap-4">
            <p className="text-base sm:text-sm">Check out my</p>
            <div className="flex items-center gap-4">
              <span className={spanCSS}>
                <a
                  className={aCSS}
                  href="https://github.com/JarHorner"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </span>
              <span className={spanCSS}>
                <a
                  className={aCSS}
                  href="https://www.linkedin.com/in/jarrethorner/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className={spanCSS}>
                <a
                  className={aCSS}
                  href="https://www.instagram.com/jarret_horner11/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span className={spanCSS}>
                <a
                  className={aCSS}
                  href="https://www.facebook.com/jarret.horner/"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        <div className="custom-shadow ease-in-out-transform hover:translate-y-10 hover:hover-custom-shadow w-full sm:w-80 md:w-96">
          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile picture"
          />
        </div>
      </Slide>
    </div>
  );
};

export default ProfComponent;
