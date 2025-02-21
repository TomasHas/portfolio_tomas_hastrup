/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoIcons from "./LogoIcons";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ img, title, src, text, stack }) => {
  return (
    <div className="    grid grid-cols-1 w-80 md:grid-cols-2 md:w-9/12  bg-white shadow-lg shadow-gray-400 overflow-hidden rounded-xl mx-auto ">
      <div>
        <a href={src}>
          <img
            src={img}
            alt="/"
            // className="  object-cover transition-transform duration-500 hover:scale-105  "
          />
        </a>
      </div>{" "}
      <div className="   flex flex-col justify-between  font-bold text-black text-center      ">
        <div className="flex flex-col mt-2  gap-3 w-full">
          <div className="flex flex-row w-full">
            <h3 className="w-3/12 text-right text-xs">Title: </h3>
            <p className="w-9/12 text-left ml-5 text-xs">
              {title.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-row w-full">
            <h3 className="w-3/12  text-right text-xs">Description:</h3>
            <p className=" w-9/12 text-left ml-5 text-xs">{text}</p>
          </div>

          <div className="flex flex-row w-full">
            <h3 className="w-3/12 text-right text-xs"> Stack:</h3>

            <ul className=" w-9/12 flex flex-row gap-2 flex-wrap text-left ml-5 text-xs max-h-10">
              {stack.map((t, i) => (
                <li key={i} className="font-thin  capitalize">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        <div className=" mt-2">
          <LogoIcons stack={stack} />
        </div>
      </div>{" "}
    </div>
  );
};

export default ProjectItem;
