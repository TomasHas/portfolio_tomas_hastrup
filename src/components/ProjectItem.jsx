/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoIcons from "./LogoIcons";
// eslint-disable-next-line react/prop-types
const ProjectItem = ({ img, title, src, text, stack }) => {
  return (
    <div className="flex flex-col ">
      <div className=" relative flex items-center justify-center h-56 bg-white shadow-lg shadow-gray-400 rounded-xl group   hover:bg-gradient-to-r from-gray-300 to-blue-900 ">
        <img
          src={img}
          alt="/"
          className=" rounded-xl group-hover:opacity-10  "
        />

        <div //hidden
          className=" hidden  group-hover:flex flex-col justify-start items-start absolute h-56
        w-full font-bold text-white text-center p-2"
        >
          <div className="flex flex-col mt-2   w-full">
            <div className="flex flex-row w-full">
              <h3 className="w-3/12 text-right">Title: </h3>
              <p className="w-9/12 text-left ml-5"> {title}</p>
            </div>

            <div className="flex flex-row w-full">
              <h3 className="w-3/12  text-right">Description:</h3>
              <p className=" w-9/12 text-left ml-5">{text}</p>
            </div>

            <div className="flex flex-row w-full">
              <h3 className="w-3/12 text-right"> Stack:</h3>

              <ul className=" w-9/12 flex flex-row gap-2 flex-wrap text-left ml-5">
                {stack.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" absolute bottom-4 flex items-center w-full justify-center">
            <a href={src}>
              <p className=" w-60  p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg">
                Go to page
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <LogoIcons stack={stack} />
      </div>
    </div>
  );
};

export default ProjectItem;

//className=" hidden  group-hover:black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
