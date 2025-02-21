import vite from "./../assets/icons/vite.svg";
import tailwind from "./../assets/icons/tailwind.svg";
import express from "./../assets/icons/express.svg";
import postgres from "./../assets/icons/postgres2.svg";
import sequelize from "./../assets/icons/sequelize.svg";
import prisma from "./../assets/icons/prisma.svg";
import html from "./../assets/icons/html.svg";
import css from "./../assets/icons/css.svg";
import javascript from "./../assets/icons/javascript3.svg";
import node from "./../assets/icons/node3.svg";
import react from "./../assets/icons/react.svg";
import redux from "./../assets/icons/redux.svg";
import next from "./../assets/icons/next.svg";
import mercadoPago from "./../assets/icons/mercadoPago.svg";
import mui from "./../assets/icons/mui.svg";
// import auth0 from './../assets/icons/auth0.svg'

const tech = [
  { name: "vite", image: vite },
  { name: "react", image: react },
  { name: "express", image: express },
  // { name: "auth0", image: auth0 },
  { name: "css", image: css },
  { name: "mercadoPago", image: mercadoPago },
  { name: "sequelize", image: sequelize },
  { name: "tailwind", image: tailwind },
  { name: "redux", image: redux },
  { name: "mui", image: mui },
  { name: "javascript", image: javascript },
  { name: "prisma", image: prisma },
  { name: "html", image: html },
  { name: "next", image: next },
  { name: "postgres", image: postgres },
  { name: "node", image: node },
];

const LogoIcons = (stack) => {
  // console.log(stack.stack);
  const projectStack = stack.stack;
  const stackArray = [];
  // console.log(projectStack);
  for (const [, value] of Object.entries(tech)) {
    // console.log(value.name, value.image);

    if (projectStack.includes(value.name)) {
      stackArray.push(value.image);
    }
  }
  // console.log(
  //   "stackArray",
  //   stackArray.map((e) => console.log(e))
  // );y

  return (
    <div className="  flex flex-row justify-between items-center h-10 w-full  bg-gray-100 px-2">
      {stackArray.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{ width: "30px" }}
          className=" h-6 hover:scale-125 ease-out duration-100"
        />
      ))}
    </div>
  );
};

export default LogoIcons;

{
  /* <div className={iconContainer}>
            <img src={tech.image} alt={tech.name} className={techIconsStyles} />
          </div> */
}

{
  /* <div className=" flex flex-row items-center gap-4  h-full  p-2 mt-4 bg-white rounded-full">
        <div className={iconContainer}>
          <img src={node} alt="node" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={javascript} alt="javascript" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={html} alt="html" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={css} alt="css" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={next} alt="next" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={redux} alt="nextjs" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={vite} alt="vite" className={techIconsStyles} />
        </div>
        <div className={iconContainer}>
          <img src={tailwind} alt="tailwind" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={express} alt="express" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={postgres} alt="postgres" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={prisma} alt="prisma" className={techIconsStyles} />
        </div>{" "}
        <div className={iconContainer}>
          <img src={sequelize} alt="sequelize" className={techIconsStyles} />
        </div>
      </div> */
}
