// eslint-disable-next-line no-unused-vars
import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="  flex flex-col  min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <div className="  relative flex h-screen flex-col justify-center items-center ">
        <div className="  absolute inset-x-0 top-0  flex  flex-col justify-start">
          {" "}
          <h1 className=" text-4xl font-bold text-center text-black p-4">
            {" "}
            Contact
          </h1>
        </div>

        <div className=" h-1/2 flex  flex-col justify-center items-center">
          <a href="https://github.com/TomasHas">
            <h3>Github</h3>
          </a>
          <a href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/">
            <h3>LinkedIn</h3>
          </a>
          <h3>thastrup@gmail.com</h3>
          <h3>+54 9 11 820 5005 </h3>
          <h3>(Argentina)</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
