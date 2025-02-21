// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import { projectList } from "../utils";

import { useTheme } from "../hooks";
import styles from "./projects.module.css";

const Projects = () => {
  const theme = useTheme();

  const titleRef = useRef();

  // console.log(projectList);

  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          obs.disconnect(); // Stop observing after first intersection
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(titleRef.current);

    return () => observer.disconnect(); // Cleanup when component unmounts
  }, []); // Run only once

  console.log(isTitleVisible);

  return (
    <div className={` mt-12 `}>
      <h1
        ref={titleRef}
        className={` opacity-0 text-4xl font-bold text-center  mb-14  ${
          theme.activeTheme.titleText
        } ${isTitleVisible ? styles.slideFadeIn : ""}`}
      >
        Projects
      </h1>

      <ul className=" flex flex-col gap-6 items-center ">
        {projectList.map((t, i) => (
          <li key={i}>
            <ProjectItem
              img={t.img}
              title={t.title}
              src={t.src}
              text={t.text}
              stack={t.stack}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

//

{
  /* <ul className="  flex flex-col gap-6 flex-wrap text-left ml-5 ">
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
            <h3 className="w-3/12 text-right font-bold ">Title: </h3>
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
</ul>{" "} */
}

{
  /* <div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
// className={styles.slideInProgress}
// ref={projectRef}
id="progress"
>
<ProjectItem
  img={pomodoro}
  title={"pomodoro project"}
  src={"https://all-timers-tau.vercel.app/"}
  text="Cloning https://pomofocus.io/"
  stack={["javascript", "vite", "css", "tailwind"]}
/>
</div>
<div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
>
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
</div>
<div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
>
<ProjectItem
  img={pokemon}
  title={"Bootcamp Project"}
  src={"https://pokemon-nextjs-virid.vercel.app/"}
  text="Henry Bootcamp Project. Work in progress."
  stack={["javascript", "next", "tailwind", "postgres", "prisma"]}
/>{" "}
</div>
<div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
>
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
</div>
<div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
>
<ProjectItem
  img={alpha}
  title={"vanilla"}
  src={"https://alpha-seven-eosin.vercel.app/"}
  text="Interview Challenge"
  stack={["javascript", "html", "css"]}
/>
</div>
<div
// className={`   ${isProjectsVisible ? styles.slideInFromLeft : ""} `}
>
<ProjectItem
  img={and}
  title={"Freelance Dummy Project"}
  src={"https://schein-esquivel.vercel.app/"}
  text="Dummy website for architecture firm. Work in progress."
  stack={["javascript", "vite", "css"]}
/>{" "}
</div> */
}
