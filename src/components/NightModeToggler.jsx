import { useEffect, useState } from "react";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
function NightModeToggler() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleClickLight = () => {
    setTheme("light");
  };
  const handleClickDark = () => {
    setTheme("dark");
  };
  console.log(theme);
  return (
    <div className=" absolute flex flex-row gap-5 top-5 right-6 cursor-pointer ">
      {" "}
      <button onClick={handleClickLight}>
        {" "}
        <MdOutlineLightMode className=" text-gray-400 hover:text-white hover:scale-110 ease-out duration-200 w-10 h-10 " />
      </button>
      <button onClick={handleClickDark}>
        {" "}
        <MdOutlineNightlight className=" text-gray-400 hover:scale-110 ease-out duration-200 hover:text-white w-10 h-10 " />
      </button>
    </div>
  );
}

export default NightModeToggler;
