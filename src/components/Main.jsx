// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  // FaTwitter,
  // FaFacebook,
  FaGithub,
  // FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import NightModeToggler from "./NightModeToggler";

import sunBrigther from "./../assets/sunBrigther.webp";
import sun from "./../assets/sun.jpg";
import moon from "./../assets/moon.webp";

const Main = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Select the <html> element
    const htmlElement = document.documentElement;

    // Create a MutationObserver instance and define the callback function
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          console.log("Class attribute changed!");
          if (htmlElement.classList.contains("dark")) {
            setTheme("dark");
            console.log("Dark mode enabled");
          } else {
            setTheme("light");
            console.log("Dark mode disabled");
          }
        }
      }
    });

    // Configure the observer to listen for attribute changes
    const config = { attributes: true };

    // Start observing the <html> element
    observer.observe(htmlElement, config);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="main" className=" relative bg-black">
      <div className=" ">
        {theme === "light" ? (
          <img
            className=" w-full h-screen object-cover scale-110   "
            src={sun}
            alt="no pic"
          />
        ) : (
          <img
            className=" w-full h-screen  object-cover lg:object-contain  scale-x-[-1]  "
            src={moon}
            alt="no pic"
          />
        )}
      </div>
      <div className="  p-4 pl-14 absolute top-1/3 left-1/2 w-1/2 rounded-s-full dark:bg-white/10  bg-orange-500/30 ">
        <div>
          <div className="  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
            <h1 className=" sm:text-5xl text-4xl font-bold text-sky-500 ">
              I´m Tomas Hastrup
            </h1>
            <h2 className=" flex sm:text-3xl text-2xl pt-4 text-blue-300">
              <TypeAnimation
                sequence={[
                  "I´m a Full Stack Web Developer",
                  2000,
                  "with over 2 years of experience",
                  2000,
                  "living in Argentina ",
                  2000,
                  "and I speak fluent english",
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
      <NightModeToggler />
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
