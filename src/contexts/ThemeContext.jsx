import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [darkThemeDefault] = useState({
    heroImage: "./night-sky.png",
    titleText: "text-white",
    bgColor: "bg-gray-900",
    buttonColor: "bg-gray-900",
    buttonText: "text-white",
    iconBg: "bg-gray-900",
    iconText: "text-white",
    buttonShadow: "shadow-white",
  });
  const [lightThemeDefault] = useState({
    heroImage: "./day-sky.png",
    titleText: "text-black",
    bgColor: "bg-white",
    buttonColor: "bg-white",
    buttonText: "text-black",
    iconBg: "bg-white",
    iconText: "text-black",
    buttonShadow: "shadow-gray-500",
  });
  const [activeTheme, setActiveTheme] = useState(lightThemeDefault);

  function toggleTheme(theme) {
    if (theme === "light") {
      setActiveTheme(lightThemeDefault);
    } else if (theme === "dark") {
      setActiveTheme(darkThemeDefault);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        activeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
