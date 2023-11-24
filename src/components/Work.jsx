// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    duration: "8/2023 - 11/2023",
    company: "AYTHEN",
    title: "Full Stack Web Developer",
    details: "Internship",
  },
  {
    duration: "2023 - Actual",
    company: "FREELANCE",
    title: "Full Stack Web Developer",
    details: "Freelance web development",
  },
  {
    duration: "2020 - Actual",
    company: "PASIÓN EVENTOS",
    title: "Producción y Logística",
    details: "Sports events logistics",
  },
  {
    duration: "2017 – 2020",
    company: "MERVE TEXTIL",
    title: "Socio / Fundador",
    details: "Textile trading",
  },
  {
    duration: "2012 – 2016",
    company: "BARBARIAN RACE",
    title: "Creador / Director General ",
    details: "Obstacle course Race",
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
    details: "Automotive corporation",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="flex flex-col  min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4"
    >
      <h1 className="  text-4xl font-bold text-center text-black">Work</h1>
      <div className=" py-14">
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
    </div>
  );
};

export default Work;
