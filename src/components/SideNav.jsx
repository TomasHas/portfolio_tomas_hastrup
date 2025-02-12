// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
import { MdOutlineGridView } from "react-icons/md";
import { useTheme } from "../hooks";
const SideNav = () => {
  const theme = useTheme();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const buttonStyle = `w-[75%] flex justify-center items-center rounded-full ${theme.activeTheme.buttonShadow} shadow-lg ${theme.activeTheme.iconBg} ${theme.activeTheme.iconText}   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100  `;

  return (
    <div className="">
      <div className=" fixed  p-2 flex  w-full  top-0 opacity-50 left-0 z-[99] md:hidden sm:hidden ">
        <AiOutlineMenu onClick={handleNav} className=" fill-white h-10 w-10 " />
      </div>
      {nav ? (
        <div className="fixed  w-full h-screen bg-red-500  flex flex-col justify-start items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="hover:w-40 w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 "
          >
            <AiOutlineHome size={20} />
            <span className=" pl-4 ">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 "
          >
            <AiOutlineProject size={20} />
            <span className=" pl-4 ">Work</span>
          </a>{" "}
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineProject size={20} />
            <span className=" pl-4 ">Projects</span>
          </a>{" "}
          {/* <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsPerson size={20} />
            <span className=" pl-4 ">Resume</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-00 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineMail size={20} />
            <span className=" pl-4 ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className=" md:block sm:block hidden fixed top-[20%] z-10 animate-slideInFromLeft">
        <div className=" flex flex-col ">
          <a
            href="#main"
            className={`w-[75%] flex justify-center items-center rounded-full ${theme.activeTheme.buttonShadow} shadow-lg ${theme.activeTheme.iconBg} ${theme.activeTheme.iconText}   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100  `}
          >
            <AiOutlineHome size={20} />
          </a>
          <a href="#work" className={buttonStyle}>
            <MdOutlineGridView size={20} />
          </a>{" "}
          <a href="#projects" className={buttonStyle}>
            <AiOutlineProject size={20} />
          </a>{" "}
          {/* <a
            href="#resume"
            className={buttonStyle}
          >
            <BsPerson size={20} />
          </a>{" "} */}
          <a href="#contact" className={buttonStyle}>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
