// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://media.istockphoto.com/id/1280157339/es/foto/vista-a%C3%A9rea-del-bosque-de-hierba-verde-con-pinos-altos-y-r%C3%ADo-azul-curvado-que-fluye-a-trav%C3%A9s.jpg?s=1024x1024&w=is&k=20&c=nKY9po0RQvZGgx90jUWfPYhli7MT5ULymMFw0lod8mE="
        alt="no pic"
      />
      <div className=" w-full h-screen absolute top-0 left-0 bg-white opacity-70">
        <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-900">
            I´m Tomas
          </h1>{" "}
          <h2 className=" flex sm:text-3xl text-2xl p-4 text-gray-800">
            I
            <TypeAnimation
              sequence={[
                "´m a developer",
                2000,
                " ´m bilingual",
                2000,
                " have a background in Marketing",
                2000,
                " ´m a coder",
                2000,
                "´m a sports enthusiast",
                2000,
                "got 99 problems... and solved every one.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className=" flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className=" cursor-pointer" size={20} />
            <FaFacebook className=" cursor-pointer" size={20} />
            <FaInstagram className=" cursor-pointer" size={20} />

            <FaGithub className=" cursor-pointer" size={20} />
            <FaLinkedinIn className=" cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
