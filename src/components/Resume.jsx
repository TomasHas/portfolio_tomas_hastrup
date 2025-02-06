import { MdOutlineFileDownload } from "react-icons/md";
// import { MdPageview } from "react-icons/md";
import { LuFileSearch } from "react-icons/lu";
import resume from "./../assets/Tomas Hastrup Full Stack Dev 2025.pdf";
import { useState } from "react";

export const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("click");

    setShowModal(true);
  };

  return (
    <div id="resume" className="   mb-20 mt-8 ">
      <div className=" flex flex-row  justify-between items-center  ">
        <div
          onClick={handleClick}
          className="w-50  flex flex-row justify-center items-center cursor-pointer shadow-lg shadow-white dark:shadow-white rounded-full pl-6 pr-6 hover:scale-105 ease-out duration-300 "
        >
          <LuFileSearch className=" animate-pulse  h-12 w-12 p-2 text-gray-300" />

          <h3 className="md:flex md:flex-row font-bold text-gray-300 dark:text-gray-300 ">
            {" "}
            View Resume
          </h3>
        </div>

        <div className="  flex flex-row justify-between items-center  cursor-pointer shadow-lg shadow-white dark:shadow-white  rounded-full pl-6 pr-6 hover:scale-105 ease-out duration-300">
          <a
            href="/src/assets/Tomas Hastrup Full Stack Dev 2025.pdf"
            download={resume}
            className=" flex flex-row gap-1"
          >
            <MdOutlineFileDownload
              download={resume}
              className="  h-11 w-11  text-gray-300 animate-bounce"
            />{" "}
            <h3 className=" flex flex-row   font-bold  text-gray-200 dark:text-gray-300 ">
              Download Resume
            </h3>
          </a>{" "}
        </div>
      </div>

      {showModal ? (
        <>
          <div className="    justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
          <div className="opacity-25 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </div>
  );
};

export default Resume;
