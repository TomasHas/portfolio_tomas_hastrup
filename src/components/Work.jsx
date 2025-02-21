// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkItem from "./WorkItem";
import Resume from "./Resume";
import { useTheme } from "../hooks";
import { data } from "../utils";

const Work = () => {
  const theme = useTheme();
  return (
    <div
      id="work"
      className="flex flex-col  mt-16  min-h-screen h-full items-center m-auto md:pl-20 p-4 "
    >
      <h1
        className={`text-4xl font-bold text-center mt-7 ${theme.activeTheme.titleText} mb-16`}
      >
        Work History
      </h1>
      <div className=" py-14  bg-slate-400 p-8 rounded-3xl md:w-7/12 ">
        {" "}
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            duration={item.duration}
            title={item.title}
            company={item.company}
            details={item.details}
          />
        ))}
      </div>
      <Resume />
    </div>
  );
};

export default Work;
