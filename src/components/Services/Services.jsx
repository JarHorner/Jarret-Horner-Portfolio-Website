import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Card from "./Card";
import { Slide, Zoom } from "react-awesome-reveal";

const Services = () => {
  return (
    <div
      id="service"
      className="w-[90%] max-w-screen-xl mb-12 mx-auto py-12 px-0 md:w-4/5"
    >
      <Slide direction="right">
        <h4 className="text-xl">
          <span className="text-green-500 font-bold uppercase">services</span>
        </h4>
        <h1 className="pt-4 text-4xl">What I Do</h1>
      </Slide>
      <div className="grid services-grid mt-12 gap-4">
        <Slide direction="right">
          <Card
            Icon={FaBusinessTime}
            title={"Business Tool Developer"}
            disc={`I was in charge of developing a Selenium application for my Alberta Health Services team that would speed up QA testing of
            the MyHealth Alberta website. It took less than 5 minutes to use the application to test multiple cases that usually took a tester 15 to 
            20 minutes manually.`}
          />
        </Slide>
        <Slide direction="right" >
          <Card
            Icon={CgWebsite}
            title={"Web Developer"}
            disc={`I have created numerous websites, for both personal study (like this one!) and university projects. The process of building
            these websites has taught me a variety of skills in web development, including UI/UX design utilizing frameworks like Tailwind CSS, integrating  
            various libraries and API's, and employing both front and back-end frameworks like React.js & node.js`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsPhone}
            title={"Application Developer"}
            disc={`I have created a variety of small applications, one of which is released on the Google Play Store! It is called Floppy Bat, 
            a simple game that taught me how to create and finish a game application using the Unity Engine, programming in C#, integrate ads, and publish in a store.`}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Services;
