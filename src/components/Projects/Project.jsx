import React from "react";
import { ImageContainer } from "../Helpers/ImageContainer";

const Project = (props) => {
  const {
    name,
    image,
    text,
    hasButton2,
    button1Name,
    button1Link,
    button2Name,
    button2Link,
  } = props;

  const slideCSS =
    "flex flex-col items-center bg-center bg-cover h-auto mx-auto";
  const textCSS =
    "text-xs pt-4 w-[275px] sm:w-[450px] md:w-[500px] md:text-sm lg:w-[650px] xl:w-[800px] 2xl:w-[900px]";
  const h1CSS = "text-3xl font-serif font-bold z-50 sm:text-4xl md:text-5xl ";
  const Button1CSS =
    "cursor-pointer bg-green-600 font-medium content-center mt-6 text-sm custom-shadow hover:hover-custom-shadow w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] sm:text-base";
  const Button2CSS =
    "cursor-pointer bg-green-600 font-medium content-center mt-6 text-sm custom-shadow hover:hover-custom-shadow w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] sm:text-base";

  return (
    <div className={slideCSS}>
      <h1 className={h1CSS}>{name}</h1>
      <ImageContainer image={image} />

      <p className={textCSS}>{text}</p>

      {hasButton2 ? (
        <div className="flex flex-row gap-x-8 p-4 sm:gap-x-24 md:gap-x-36 lg:gap-x-52 xl:gap-x-64">
          <a href={button1Link} target="_blank" className={Button1CSS}>
            {button1Name}
          </a>
          <a href={button2Link} target="_blank" className={Button2CSS}>
            {button2Name}
          </a>
        </div>
      ) : (
        <div className="flex flex-row p-4">
          <a href={button1Link} target="_blank" className={Button1CSS}>
            {button1Name}
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
