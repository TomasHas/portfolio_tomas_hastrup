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
import IMG_6569 from "../../public/assets/IMG_6569.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1]"
        src={IMG_6569}
        alt="no pic"
      />
      <div className=" w-full h-screen absolute top-0 left-0 bg-orange-300 opacity-70">
        <div className=" max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-900">
            I´m Tomas Hastrup
          </h1>
          <h2 className=" flex sm:text-3xl text-2xl p-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "I´m a full stack web developer",
                2000,
                "I also have background in marketing",
                2000,
                "and I speak fluent english",
                2000,
                "I´m a outdoor enthusiast",
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
          <div className=" flex justify-between pt-3 max-w-[200px] w-20 ">
            <a href="https://github.com/TomasHas">
              <FaGithub className=" cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/ ">
              <FaLinkedinIn className=" cursor-pointer" size={20} />
            </a>
            {/* <a href="">
            <FaInstagram className=" cursor-pointer" size={20} /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
