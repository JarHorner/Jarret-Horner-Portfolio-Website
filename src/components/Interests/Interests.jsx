import React from "react";
import { Slide } from "react-awesome-reveal";

const Interests = () => {
  return (
    <div
      id="interests"
      className="w-[90%] max-w-screen-xl my-0 mx-auto py-16 px-0 md:w-4/5"
    >
      <Slide direction="right">
        <span className="text-green-500 font-bold uppercase text-xl">
          Interests
        </span>
        <h1 className="pt-4 text-4xl">What I Enjoy</h1>
      </Slide>
    </div>
  );
};

export default Interests;
