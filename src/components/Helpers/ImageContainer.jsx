import React from "react";


const ImageContainer = ({ image }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-8 h-[325px] w-[275px] sm:h-[400px] sm:w-[450px] md:h-[450px] md:w-[500px] lg:h-[500px] lg:w-[650px] xl:h-[550px] xl:w-[800px] 2xl:h-[600px] 2xl:w-[900px] overflow-hidden">
        <img src={image} alt={`Image ${image}`} className="w-full h-full object-contain"/>
      </div>
    </div>
  );
};
export { ImageContainer };
