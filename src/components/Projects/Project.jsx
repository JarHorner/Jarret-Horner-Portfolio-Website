import React from "react";
import { SwiperSlide } from "swiper/react";
import {
  HorizontalImageContainer,
  VerticalImageContainer,
} from "../Helpers/ImageContainer";

const Project = (props) => {
  const { name, image, text } = props;

  const slideCSS =
    "flex flex-col items-center bg-center bg-cover h-auto w-[80%] mx-auto ";
  const textCSS = "text-sm w-[350px] sm:w-[550px] md:w-[850px]";
  const h1CSS = "text-3xl font-serif font-bold z-50 sm:text-4xl md:text-5xl";
  const Button1CSS =
    "cursor-pointer bg-green-600 font-medium text-sm mt-4 custom-shadow hover:hover-custom-shadow px-2 py- bottom-40 left-12 sm:bottom-24 sm:px-6 sm:py-2.5 md:left-14 md:px-8 md:py-3 ";
  const Button2CSS =
    "cursor-pointer bg-green-600 font-medium text-sm ml-32 mt-4 custom-shadow hover:hover-custom-shadow px-2 py-1 bottom-40 right-12 sm:bottom-24 sm:px-6 sm:py-2.5 md:right-14 md:px-8 md:py-3";

  return (
    <SwiperSlide className={slideCSS}>
      <h1 className={h1CSS}>{name}</h1>
      <HorizontalImageContainer image={image} />
      <p className={textCSS}>{text}</p>
      <a
        href="https://play.google.com/store/apps/details?id=com.FrydayGames.FloppyBat"
        target="_blank"
        className={Button1CSS}
      >
        Store Link
      </a>
    </SwiperSlide>
  );
};

export default Project;
