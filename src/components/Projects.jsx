// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";
import HomeStep from "../assets/HomeStep.jpg";

import brandsStep from "../assets/brandsStep.jpg";

import storeStep from "../assets/storeStep.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-screen max-w-[1040px] m-auto md:pl-20 p-4 py:16"
    >
      <h1 className=" text-4xl font-bold text-center text-black">Projects</h1>
      <p className=" text-center py-8">
        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor
        at architecto aspernatur a neque, magni numquam aut expedita ad vel
        nobis ab doloremque doloribus quia, exercitationem hic quam aliquid.
      </p>
      <div className=" grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={HomeStep}
          title={"Step by Step"}
          src={"https://step-by-step-pi.vercel.app/"}
        />
        <ProjectItem img={brandsStep} title={"Step by Step"} />

        <ProjectItem img={storeStep} title={"Step by Step"} />
        <ProjectItem img={brandsStep} title={"Step by Step"} />
      </div>
    </div>
  );
};

export default Projects;
