import React from "react";
import { Zoom } from "react-awesome-reveal";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <div
      id="project"
      className="w-[90%] max-w-screen-xl my-0 mx-auto py-12 px-0 text-center relative md:w-4/5"
    >
      <Zoom>
        <h1 className="text-3xl font-bold uppercase">
          <span className="text-green-500">Projects</span>
        </h1>
        <p className="w-[90%] my-0 mx-auto py-4 px-0 text-md sm:w-[28rem]">
          Here are all my current and past projects, each includes information about
          the project, and link(s) to where you can see it.
        </p>
      </Zoom>
      <Carousel />
    </div>
  );
};

export default Projects;
