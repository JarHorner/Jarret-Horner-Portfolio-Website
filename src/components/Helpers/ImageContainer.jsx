import React from "react";

const HorizontalImageContainer = ({ image }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] p-2 mt-8">
        <img src={image} alt={`Image ${image}`} className="w-full h-auto" />
      </div>
    </div>
  );
};
const VerticalImageContainer = ({ image }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-1/3 p-2">
        <div className="aspect-w-1 aspect-h-1">
          <img src={image} alt={`Image ${image}`} className="object-cover object-center h-full w-[85%]" />
        </div>
      </div>
    </div>
  );
};

export { HorizontalImageContainer, VerticalImageContainer };
