// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkItem from "./WorkItem";
import Resume from "./Resume";
import { useTheme } from "../hooks";
const data = [
  {
    duration: "2023 - Current",
    company: "FREELANCE",
    title: "Full Stack Web Developer",
    details: "Freelance web development",
  },
  {
    duration: "2020 - Current",
    company: "PASIÓN EVENTOS",
    title: "Production and Logístics",
    details: "Sports events logistics",
  },
  {
    duration: "8/2023 - 11/2023",
    company: "AYTHEN",
    title: "Full Stack Web Developer",
    details: "Internship",
  },

  {
    duration: "2017 – 2020",
    company: "MERVE TEXTIL",
    title: "Founding Partner",
    details: "Textile trading",
  },
  {
    duration: "2012 – 2016",
    company: "BARBARIAN RACE",
    title: "Creator/Director",
    details: "10k Obstacle Course Race",
  },
  {
    duration: "2011 - 2012",
    company: "COLCAR MERBUS S.A.",
    title: "Marketing Manager",
    details: "Mercedes-Benz dealership",
  },
  {
    duration: "2006 - 2010",
    company: "DAIMLERCHRYSLER ARGENTINA",
    title: "Marketing Manager",
    details: "Automotive Corporation",
  },
];

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
      <div className=" py-14  bg-slate-400 p-8 rounded-3xl w-[50%]">
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
