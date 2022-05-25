import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const StateProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("color")
  );
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("color", color);
  };

  const setTheme = (e) => {
    setCurrentTheme(e.target.value);

    localStorage.setItem("theme", e.target.value);
  };

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        screenSize,
        setScreenSize,
        currentColor,
        currentTheme,
        themeSettings,
        setThemeSettings,
        setColor,
        setTheme,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
