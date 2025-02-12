// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  // FaTwitter,
  // FaFacebook,
  FaGithub,
  // FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="  flex flex-col h-64  md:h-40 s m-auto md:pl-20  bg-gray-600"
    >
      <div className="  flex h-screen flex-col justify-center items-center ">
        <div className="  inset-x-0 top-0  flex  flex-col justify-start">
          {" "}
          <h1
            className={`text-4xl hidden p-4 font-bold md:block text-center text-white`}
          >
            {" "}
            Contact
          </h1>
        </div>

        <div className=" h-1/2 flex flex-col md:flex-row justify-center items-center gap-5 text-gray-300 ">
          <a
            href="https://github.com/TomasHas"
            className="flex flex-row items-center gap-2 hover:text-blue-600"
          >
            <FaGithub /> <h3 className=" ">Github</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/"
            className="flex flex-row gap-1 items-center  hover:text-blue-600"
          >
            <FaLinkedinIn /> <h3>Linkedin</h3>
          </a>
          <h3 className=" hover:text-blue-600">thastrup@gmail.com</h3>
          <h3 className=" hover:text-blue-600">(+54 ) 9 11 3820 5005 </h3>
          <h3 className=" hover:text-blue-600">Buenos Aires, Argentina</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
