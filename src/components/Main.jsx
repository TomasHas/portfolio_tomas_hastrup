// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  // FaTwitter,
  // FaFacebook,
  FaGithub,
  // FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import sun from "./../assets/sun.jpg";

const Main = () => {
  return (
    <div
      id="main"
      className="relative
    "
    >
      <div className=" ">
        <img
          className=" w-full h-screen object-cover object-left scale-x-[-1]  "
          src={sun}
          alt="no pic"
        />
      </div>
      <div className="  p-4 absolute top-1/4 left-1/2 w-1/2 bg-orange-500/30 ">
        <div>
          <div className="  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
            <h1 className=" sm:text-5xl text-4xl font-bold text-gray-300">
              I´m Tomas Hastrup
            </h1>
            <h2 className=" flex sm:text-3xl text-2xl pt-4 text-gray-300">
              <TypeAnimation
                sequence={[
                  "I´m a full stack web developer",
                  2000,
                  "I also have background in marketing",
                  2000,
                  "and I speak fluent english",
                  2000,
                  "I like sports and the outdoors",
                  2000,
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
      <div className=" flex flex-row items-center absolute bottom-2 right-6 w-48 fill-gray-300 gap-5">
        <a href="https://github.com/TomasHas">
          <FaGithub
            className=" cursor-pointer fill-gray-300 hover:fill-gray-700"
            size={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/ ">
          <FaLinkedinIn
            className=" cursor-pointer fill-gray-300  hover:fill-gray-700"
            size={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Main;
