import React from "react";
import { Slide } from "react-awesome-reveal";
import ProjectsCarousel from "./ProjectsCarousel";
import Swiper from "swiper";

const Projects = () => {
  return (
    <div
      id="project"
      className="w-[90%] max-w-screen-xl my-0 mx-auto py-12 px-0 text-center relative md:w-4/5"
    >
      <Slide direction="left" >
        <h1 className="text-3xl font-bold uppercase">
          <span className="text-green-500">Projects</span>
        </h1>
        <p className="w-[90%] my-0 mx-auto py-4 px-0 text-md sm:w-[28rem]">
          Here are all my current and past projects, each includes information about
          the project, and link(s) to where you can see it.
        </p>
      </Slide>
      <ProjectsCarousel />
    </div>
  );
};

export default Projects;
