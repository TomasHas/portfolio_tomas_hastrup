// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../hooks";
import {
  // FaTwitter,
  // FaFacebook,
  FaGithub,
  // FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// import sunBrigther from "./../assets/sunBrigther.webp";
// import sun from "./../assets/sun.png";
// import moon from "./../assets/moon.png";
// const sun2 = "./sunshine.png";

const Main = () => {
  const theme = useTheme();

  console.log(theme.activeTheme.heroImage);

  return (
    <div id="main" className={`relative  `}>
      <div>
        <img
          className=" w-full h-screen  object-cover bg-cover bg-center bg-no-repeat min-h-screen bg-blue-400  "
          src={theme.activeTheme.heroImage}
          alt="no pic"
        />
      </div>
      <div
        className={`  p-4 pl-14 absolute top-1/3 md:left-1/2 md:w-1/2 md:rounded-s-full bg-white/30 animate-slideInFromRight`}
      >
        <div>
          <div className="  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
            <h1 className=" sm:text-5xl text-4xl font-bold text-white ">
              Tomas Hastrup
            </h1>
            <h2 className=" flex sm:text-3xl text-2xl pt-4 text-gray-300">
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer",
                  2000,
                  "Over 2 years experience",
                  2000,
                  "Based in Argentina",
                  2000,
                  "Fluent English",
                  2000,
                  // "and also have background in marketing",
                  // 2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-center absolute bottom-2 right-6  fill-gray-300 gap-5">
        <a href="https://github.com/TomasHas">
          <FaGithub
            className=" cursor-pointer fill-gray-300 hover:fill-white"
            size={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/ ">
          <FaLinkedinIn
            className=" cursor-pointer fill-gray-300  hover:fill-white"
            size={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Main;
