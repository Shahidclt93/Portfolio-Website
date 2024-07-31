import { useState, useEffect } from "react";

const useDarkMode = () => {
  const getDarkMode = localStorage.getItem("darkMode");
  const [darkTheme, setDarkTheme] = useState(
    getDarkMode ? JSON.parse(getDarkMode) : true
  );

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
    localStorage.setItem("darkMode", darkTheme);
  }, [darkTheme]);
  return [darkTheme, setDarkTheme];
};

export default useDarkMode;
