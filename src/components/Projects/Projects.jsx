import React from "react";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div
      id="project"
      className="w-[90%] max-w-screen-xl my-0 mx-auto py-12 px-0 text-center relative md:w-4/5"
    >
      <Zoom>
        <h1 className="text-3xl">
          Recent <span className="text-green-500">Projects</span>
        </h1>
        <p className="w-[90%] my-0 mx-auto py-4 px-0 text-sm sm:w-[28rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          doloremque voluptate excepturi porro sed totam quis animi dolorum
          rerum earum.
        </p>
      </Zoom>
      <div></div>
    </div>
  );
};

export default Projects;
