import React from "react";
import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-[90%] max-w-screen-xl my-0 mx-auto py-16 px-0 md:w-4/5"
    >
      <Slide direction="left">
        <span className="text-green-500 font-bold uppercase text-lg">
          Testimonials
        </span>
        <h1 className="pt-4 text-4xl">What Clients Say</h1>
      </Slide>
    </div>
  );
};

export default Testimonials;
