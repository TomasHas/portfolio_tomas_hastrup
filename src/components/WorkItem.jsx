// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const WorkItem = ({ duration, company, title, details }) => {
  return (
    <div>
      <ul className=" flex flex-col md:flex-row relative border-l  border-stone-200 w-full">
        <li className="  mb-10 ml-4 w-full">
          <div className=" absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="  flex flex-wrap gap-4 flex-row items-center justify-between text-xs md:text-sm  w-full">
            <div className="flex flex-row   justify-between items-center">
              <span className=" inline-block p-2 text-center font-semibold text-white bg-blue-900 rounded-full -md w-40">
                {duration}
              </span>
            </div>

            <div className=" flex flex-col w-full lg:w-[50%]">
              <span className=" text-md font-semibold text-blue-900">
                {company}
              </span>
              <span className=" my-l text-lg font-normal leading-none text-stone-100 ">
                {title}
              </span>{" "}
              <span className=" my-2 text-base font-normal text-stone-200">
                {details}
              </span>
            </div>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WorkItem;
