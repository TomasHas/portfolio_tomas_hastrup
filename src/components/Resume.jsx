import { MdOutlineFileDownload } from "react-icons/md";
// import { MdPageview } from "react-icons/md";
import { LuFileSearch } from "react-icons/lu";
import resume from "./../assets/TOMAS HASTRUP resume 2023.pdf";
import { useState } from "react";

export const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      id="resume"
      // className="   flex flex-col  min-h-screen h-full max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <div className=" flex flex-row  justify-between items-center  ">
        <div className="w-50  flex flex-row justify-center items-center cursor-pointer ">
          <LuFileSearch
            onClick={handleClick}
            className="    h-12 w-12 p-2 text-gray-300"
          />

          <h3 className="md:flex md:flex-row  font-bold text-gray-300">
            {" "}
            View Resume
          </h3>
        </div>

        <div className="  flex flex-row justify-between items-center  cursor-pointer ">
          <a href="/src/assets/TOMAS HASTRUP resume 2023.pdf" download={resume}>
            <MdOutlineFileDownload
              download={resume}
              className="  h-11 w-11  text-gray-300"
            />
          </a>{" "}
          <h3 className=" flex flex-row   font-bold  text-gray-300">
            Download Resume
          </h3>
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
          <div className="opacity-25 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </div>
  );
};

export default Resume;
