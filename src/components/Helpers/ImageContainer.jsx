import React from "react";


const ImageContainer = ({ image }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-8 h-[600px] w-[900px] overflow-hidden">
        <img src={image} alt={`Image ${image}`} className="w-full h-full object-contain"/>
      </div>
    </div>
  );
};
export { ImageContainer };
