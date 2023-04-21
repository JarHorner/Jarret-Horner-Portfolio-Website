import React from "react";

const Card = (props) => {
  const { Icon, disc, title } = props;

  const cardColor = "bg-gradient-to-l from-gray-700 to-gray-900";

  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-center p-4 ${cardColor}`}
    >
      <span className="text-6xl text-green-500 pb-2">
        <Icon />
      </span>
      <h1 className="text-xl pb-4">{title}</h1>
      <p className="text-sm">{disc}</p>
    </div>
  );
};

export default Card;
