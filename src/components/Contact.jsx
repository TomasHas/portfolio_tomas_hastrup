// eslint-disable-next-line no-unused-vars
import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className=" flex flex-col items-center
       max-w-[1040px] m-auto md:pl-20 p-4 py16
    "
    >
      <h1 className=" text-4xl font-bold text-center text-black"> Contact</h1>

      <a href="https://github.com/TomasHas">
        {" "}
        <h3>Github</h3>
      </a>
      <a href="https://www.linkedin.com/in/tomas-hastrup-1a28a413/">
        {" "}
        <h3>LinkedIn</h3>
      </a>
      <h3>thastrup@gmail.com</h3>
      <h3>+54 9 11 820 5005 (Argentina)</h3>
    </div>
  );
}

export default Contact;
