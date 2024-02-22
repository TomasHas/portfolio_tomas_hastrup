// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";
import HomeStep from "../assets/HomeStep.jpg";
import alpha from "../assets/alpha1.jpg";
import and from "../assets/and.jpg";
import pokemon from "../assets/pokemon.JPG";
import petVenture from "../assets/petVenture.JPG";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col  min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <h1 className=" text-4xl font-bold text-center text-black">Projects</h1>
      <p className=" text-center py-8">
        Step by Step is the project we built to graduate from Henry Bootcamp.
        I´ll be uploading new projects soon.
      </p>
      <div className=" grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={HomeStep}
          title={"Step by Step"}
          src={"https://step-by-step-pi.vercel.app/"}
        />
        <ProjectItem
          img={alpha}
          title={"Interview Project"}
          src={"https://alpha-seven-eosin.vercel.app/"}
        />
        <ProjectItem
          img={and}
          title={"Freelance Project"}
          src={"https://schein-esquivel.vercel.app/"}
        />
        <ProjectItem
          img={pokemon}
          title={"Bootcamp Project"}
          src={"https://pokemon-nextjs-virid.vercel.app/"}
        />
        <ProjectItem
          img={petVenture}
          title={"Pet Venture Project"}
          src={"https://pet-venture-2-git-develop-jesusegomez.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
