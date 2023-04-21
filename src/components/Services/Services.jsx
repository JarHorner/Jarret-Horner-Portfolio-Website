import React from "react";
import { FaGamepad } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {

    return (
        <div id="service" className="w-[90%] max-w-screen-xl my-0 mx-auto py-12 px-0 md:w-4/5">
            <Slide direction="down">
                <h4 className="text-xl">
                    My <span className="text-green-500">services</span>
                </h4>
                <h1 className="pt-4 text-4xl">What I Do</h1>
            </Slide>
            <div className="grid services-grid mt-16 gap-4">
                <Slide direction="left">
                    <Card
                    Icon={FaGamepad}
                    title={"Game Developer"}
                    disc={`Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction="up">
                    <Card
                    Icon={CgWebsite}
                    title={"Web Designer"}
                    disc={`Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction="right">
                    <Card
                    Icon={BsPhone}
                    title={"Application Developer"}
                    disc={`Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
            </div>
        </div>
    )
  }
  
  export default Services;