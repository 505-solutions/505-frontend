import React, { createContext, useContext, useState, useEffect } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [toggleTop, setToggle] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [showItem, setShowItem] = useState(true);
  const [activeMobileMenu, setActiveMobileMenu] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(true);

  const checkScreenSize = () => {
    if (window.innerWidth < 1200) {
      setMobile(false);
      setRightBar(false);
    } else {
      setMobile(true);
      setRightBar(true);
    }
  };

  // ===========> Switcher Function START
  useEffect(() => {
    const themeType = localStorage.getItem("chatenai-theme");
    if (themeType === "dark") {
      setDarkTheme(false);
      document.body.classList.add("active-light-mode");
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.remove("active-light-mode");
      localStorage.setItem("chatenai-theme", "light");
    } else {
      document.body.classList.add("active-light-mode");
      localStorage.setItem("chatenai-theme", "dark");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  // ===========> Switcher Function END

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const shouldCollapseLeftbar = !mobile;
  const shouldCollapseRightbar = !rightBar;

  return (
    <CreateContext.Provider
      value={{
        mobile,
        setMobile,
        showItem,
        setShowItem,
        activeMobileMenu,
        setActiveMobileMenu,
        toggleTop,
        setToggle,
        toggleAuth,
        setToggleAuth,
        rightBar,
        setRightBar,
        shouldCollapseLeftbar,
        shouldCollapseRightbar,
        isDarkTheme,
        setDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
