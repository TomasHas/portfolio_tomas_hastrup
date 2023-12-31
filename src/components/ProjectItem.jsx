// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ img, title, src }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-auto shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-blue-900">
      <img src={img} alt="/" className=" rounded-xl group-hover:opacity-10  " />
      <div className=" hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-center">
        <h3>{title}</h3>
        <p className=" pb-4 pt-2 text-white text-center">React Js</p>
        <a href={src}>
          <p className=" text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Go to page
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

//className=" hidden  group-hover:black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
