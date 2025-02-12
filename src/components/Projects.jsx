// eslint-disable-next-line no-unused-vars
import React from "react";
// import ProjectItem from "./ProjectItem";
import LogoIcons from "./LogoIcons";
import HomeStep from "./../assets/HomeStep.jpg";
import alpha from "./../assets/alpha1.jpg";
import and from "./../assets/and.jpg";
import pokemon from "./../assets/pokemon.jpg";
// import petVenture from "./../assets/petVenture.jpg";
import pomodoro from "./../assets/pomodorothumb.jpg";
import { useTheme } from "../hooks";

const Projects = () => {
  const theme = useTheme();
  const projectList = [
    {
      img: pomodoro,
      title: "pomodoro project",
      src: "https://all-timers-tau.vercel.app/",
      text: "Cloned the productivity website https://pomofocus.io/",
      stack: ["javascript", "vite", "css", "tailwind"],
    },
    {
      img: HomeStep,
      title: "Step by Step",
      src: "https://step-by-step-pi.vercel.app/",
      text: "E-commerce website for Henry Bootcamp Final Group Project.",
      stack: [
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
      ],
    },
    {
      img: pokemon,
      title: "Bootcamp Project",
      src: "https://pokemon-nextjs-virid.vercel.app/",
      text: "individual Henry Bootcamp Project. Check out the tic tac toe feature.",
      stack: ["javascript", "next", "tailwind", "postgres", "prisma"],
    },
    {
      img: alpha,
      title: "Interview Challenge",
      src: "https://alpha-seven-eosin.vercel.app/",
      text: "Technical challenge for job interview",
      stack: ["javascript", "html", "css"],
    },
    {
      img: and,
      title: "Freelance Dummy Project",
      src: "https://schein-esquivel.vercel.app/",
      text: "Dummy website for architecture firm. Work in progress.",
      stack: ["javascript", "vite", "css"],
    },
  ];

  return (
    <div>
      <div
        id="projects"
        className="flex flex-col mt-16 min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
      >
        <h1
          className={` text-4xl font-bold text-center  mb-14 ${theme.activeTheme.titleText} animate-slideInFromRight`}
        >
          Projects
        </h1>

        <div className={`flex flex-row ${theme.activeTheme.titleText}`}>
          <ul className="  flex flex-col gap-6 flex-wrap text-left ml-5 ">
            {projectList.map((t, i) => (
              <li key={i} className="">
                <div
                  className={`flex flex-row  p-2 gap-2 rounded-xl shadow-lg ${theme.activeTheme.buttonShadow} `}
                >
                  <div className="w-[50%]">
                    <a href={t.src} target="_blank" rel="noopener noreferrer">
                      <img src={t.img} alt="/" className=" h-full rounded " />
                    </a>{" "}
                  </div>

                  <div className=" w-[50%] h-56 relative flex flex-col justify-between items-center px-4   ">
                    <div className="flex flex-col mt-2  w-full">
                      <div className="flex flex-row w-full">
                        <h3 className="w-3/12 text-right font-bold ">
                          Title:{" "}
                        </h3>
                        <p className="w-9/12 text-left ml-5 ">
                          {" "}
                          {t.title.toUpperCase()}
                        </p>
                      </div>

                      <div className="flex flex-row w-full">
                        <h3 className="w-3/12  text-right font-bold">
                          Description:
                        </h3>
                        <p className=" w-9/12 text-left ml-5 ">{t.text}</p>
                      </div>

                      <div className="flex flex-row w-full">
                        <h3 className="w-3/12 text-right font-bold"> Stack:</h3>
                        <ul className=" flex flex-row w-9/12 text-left ml-5 gap-x-2 max-w-full flex-wrap">
                          {t.stack.map((t, i) => (
                            <li key={i}>
                              <p className=" font-thin  capitalize ">{t}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <LogoIcons stack={t.stack} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <ProjectItem
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
          />{" "} */
}
