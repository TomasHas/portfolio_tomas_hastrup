import { GrDocumentDownload } from "react-icons/gr";
// import { MdPageview } from "react-icons/md";
import { LuFileSearch } from "react-icons/lu";
import resume from "../assets/TOMAS HASTRUP resume 2023.pdf";
import { useState } from "react";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      id="resume"
      className="   flex flex-col  min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <div className="  relative flex h-screen flex-row justify-center items-center ">
        <div className="  absolute inset-x-0 top-0  flex  flex-col justify-start">
          <h1 className="   text-4xl font-bold text-center text-black p-4">
            Resume
          </h1>
        </div>
        <div className=" flex flex-row w-full justify-evenly ">
          <div className="   w-40 p-2 flex flex-col justify-center items-center cursor-pointer ">
            <LuFileSearch
              onClick={handleClick}
              className="  hover:h-[70%] hover:w-[70%]  h-20 w-20 p-2"
            />

            <h3 className="md:flex md:flex-col justify-center items-center font-bold">
              {" "}
              View Resume
            </h3>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center cursor-pointer ">
            <a
              href="/src/assets/TOMAS HASTRUP resume 2023.pdf"
              download={resume}
            >
              {" "}
              <GrDocumentDownload
                download={resume}
                className=" hover:bg-grey-500 hover:h-[70%] hover:w-[70%] h-20 w-20 p-2"
              />
              <h3 className="flex flex-col justify-center items-center font-bold">
                Download Resume
              </h3>
            </a>
          </div>
        </div>

        {showModal ? (
          <>
            <div className="  absolute  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full h-full my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"></div>
                  {/*body*/}

                  <div className="relative p-6 flex-auto ">
                    <iframe
                      className=" w-full h-full"
                      src={resume}
                      frameBorder="0"
                    ></iframe>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Resume;
