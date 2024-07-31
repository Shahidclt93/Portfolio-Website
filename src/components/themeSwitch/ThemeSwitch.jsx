import React from "react";
import "./themeSwitch.css";
import useDarkMode from "../../hooks/useDarkMode";

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  return (
    <>
      <button
        className={`${darkTheme ? "theme-btn" : "theme-btn active"}`}
        onClick={() => setDarkTheme((prev) => !prev)}
      >
        <span className="icon"></span>
      </button>
    </>
  );
};

export default DarkMode;
