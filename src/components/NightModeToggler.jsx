// import { useEffect, useState } from "react";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "../hooks";
function NightModeToggler() {
  const theme = useTheme();

  console.log(theme.activeTheme.mode);

  const handleClick = () => {
    if (theme.activeTheme.mode === "light") {
      theme.toggleTheme("dark");
    } else {
      theme.toggleTheme("light");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-[75%] flex justify-center items-center rounded-full ${theme.activeTheme.buttonShadow} shadow-lg ${theme.activeTheme.iconBg} ${theme.activeTheme.iconText}   m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100  `}
      >
        {theme.activeTheme.mode === "dark" ? (
          <MdOutlineLightMode
            className={`${theme.activeTheme.textColor}  hover:text-gray-400 hover:scale-110 ease-out duration-200 w-5 h-5 `}
          />
        ) : (
          <MdOutlineNightlight
            className={`${theme.activeTheme.textColor}  ease-out duration-200 hover:text-gray-400 w-5 h-5 `}
          />
        )}
      </button>
    </div>
  );
}

export default NightModeToggler;
