import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const storedTheme = window.localStorage.getItem("myTheme");

  const checkTheme = () => {
    if (storedTheme === "darkTheme") {
      return false;
    }
    return true;
  };

  const [isLight, setIsLight] = useState(checkTheme);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem("myTheme", "lightTheme");
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem("myTheme", "darkTheme");
  }

  useEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );

      if (storedTheme === "darkTheme" && operatingSystemThemeDark.matches) {
        root.classList.add("dark");
      }

      if (storedTheme === "darkTheme") {
        root.classList.add("dark");
      }

      if (storedTheme === "lightTheme") {
        root.classList.remove("dark");
      }
    };
    setTheme();

    // console.log(`${storedTheme} selected`);
  }, [storedTheme]);

  return (
    <div className="theme-switcher ml-4 flex items-center">
      <button
        type="button"
        className={`dark-mode-switch mr-1 h-[42px] w-[42px] cursor-pointer rounded-[100%] border
        p-[11px] ${!isLight && "hidden"}`}
        onClick={setDarkTheme}
      >
        <BsFillMoonStarsFill size={18} />
      </button>
      <button
        type="button"
        className={`light-mode-switch mr-2 h-[40px] w-[40px] cursor-pointer rounded-[100%] border
        p-[10px] ${isLight && "hidden"}`}
        onClick={setLightTheme}
      >
        <BsSun size={18} />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
