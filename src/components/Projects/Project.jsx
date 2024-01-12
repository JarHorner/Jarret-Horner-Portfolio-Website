import React from "react";
import {
  HorizontalImageContainer,
  VerticalImageContainer,
} from "../Helpers/ImageContainer";

const Project = (props) => {
  const {
    name,
    verticalImage,
    image,
    text,
    hasButton2,
    button1Name,
    button1Link,
    button2Name,
    button2Link,
  } = props;

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
    <div className={slideCSS}>
      <h1 className={h1CSS}>{name}</h1>
      { verticalImage ? (<VerticalImageContainer image={image}/>) : (<HorizontalImageContainer image={image}/> ) }

      <p className={textCSS}>{text}</p>
      <a href={button1Link} target="_blank" className={Button1CSS}>
        {button1Name}
      </a>
      {hasButton2 ? (
        <a href={button2Link} target="_blank" className={Button2CSS}>
          {button2Name}
        </a>
      ) : (
        <a></a>
      )}
    </div>
  );
};

export default Project;
