// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";

import HomeStep from "./../assets/HomeStep.jpg";
import alpha from "./../assets/alpha1.jpg";
import and from "./../assets/and.jpg";
import pokemon from "./../assets/pokemon.jpg";
import petVenture from "./../assets/petVenture.jpg";
import pomodoro from "./../assets/pomodorothumb.jpg";

const Projects = () => {
  return (
    <div>
      <div
        id="projects"
        className="flex flex-col mt-16 min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
      >
        <h1 className=" text-4xl font-bold text-center text-gray-400 mt-7">
          Projects
        </h1>
        <p className=" text-center py-8  text-gray-200"></p>
        <div className=" grid sm:grid-cols-2 gap-12 object-cover">
          <ProjectItem
            img={pomodoro}
            title={"pomodoro project"}
            src={"https://all-timers-tau.vercel.app/"}
            text="Cloning https://pomofocus.io/"
            stack={["javascript", "vite", "css", "tailwind"]}
          />
          <ProjectItem
            img={HomeStep}
            title={"Step by Step"}
            src={"https://step-by-step-pi.vercel.app/"}
            text="Henry Bootcamp Final Group Project."
            stack={[
              "javascript",
              "vite",
              "css",
              "mercadoPago",
              "auth0",
              "sequelize",
              "postgres",
              "daisyUi",
              "redux",
              "mui",
              "express",
            ]}
          />{" "}
          <ProjectItem
            img={pokemon}
            title={"Bootcamp Project"}
            src={"https://pokemon-nextjs-virid.vercel.app/"}
            text="Henry Bootcamp Project. Work in progress."
            stack={["javascript", "next", "tailwind", "postgres", "prisma"]}
          />{" "}
          <ProjectItem
            img={petVenture}
            title={"Pet Venture Project"}
            src={"https://pet-venture-2-git-develop-jesusegomez.vercel.app/"}
            text="Henry Bootcamp Final Group Project #2. Unfinished."
            stack={[
              "javascript",
              "next",
              "css",
              "mercadoPago",
              "sequelize",
              "postgres",
              "redux",
              "mui",
              "express",
            ]}
          />{" "}
          <ProjectItem
            img={alpha}
            title={"vanilla"}
            src={"https://alpha-seven-eosin.vercel.app/"}
            text="Interview Challenge"
            stack={["javascript", "html", "css"]}
          />
          <ProjectItem
            img={and}
            title={"Freelance Dummy Project"}
            src={"https://schein-esquivel.vercel.app/"}
            text="Dummy website for architecture firm. Work in progress."
            stack={["javascript", "vite", "css"]}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;
