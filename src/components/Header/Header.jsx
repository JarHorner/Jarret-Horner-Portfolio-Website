import React, { useState } from "react";
import { DiCodeigniter } from "react-icons/di";

const Header = () => {
  const navLink = "text-white font-normal relative hover:opacity-70";

  return (
    <div className="flex items-center justify-between max-w-7xl w-[90%] my-0 mx-auto py-6 px-0 relative md:w-4/5">
      <div className="flex items-center gap-2">
        <span className="text-4xl text-red-600">
          <DiCodeigniter />
        </span>
        <h1 className="text-2xl font-semibold pt-1">Portfolio</h1>
      </div>
      <div className="text-lg">
        <span className="ml-4">
          <a className={navLink} href="#home">
            Home
          </a>
        </span>
        <span className="ml-4">
          <a className={navLink} href="#service">
            Services
          </a>
        </span>
        <span className="ml-4">
          <a className={navLink} href="#project">
            Projects
          </a>
        </span>
        <span className="ml-4">
          <a className={navLink} href="#interests">
            Interests
          </a>
        </span>
        <span className="ml-4">
          <a className={navLink} href="#portfolio">
            Portfolio
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
