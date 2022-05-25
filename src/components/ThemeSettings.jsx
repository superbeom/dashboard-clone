import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
  const {
    currentColor,
    currentTheme,
    setColor,
    setTheme,
    setShowThemeSettings,
  } = useStateContext();

  const onCloseThemeSettings = () => {
    setShowThemeSettings(false);
  };

  return (
    <div
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0"
      onClick={onCloseThemeSettings}
    >
      <div
        className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>

          <button
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            type="button"
            onClick={onCloseThemeSettings}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>

          <div className="mt-4">
            <input
              className="cursor-pointer"
              id="light"
              type="radio"
              name="theme"
              value="Light"
              onChange={setTheme}
              checked={currentTheme === "Light"}
            />

            <label className="ml-2 text-md cursor-pointer" htmlFor="light">
              Light
            </label>
          </div>

          <div className="mt-4">
            <input
              className="cursor-pointer"
              id="dark"
              type="radio"
              name="theme"
              value="Dark"
              onChange={setTheme}
              checked={currentTheme === "Dark"}
            />

            <label className="ml-2 text-md cursor-pointer" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>

          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    type="button"
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        currentColor === item.color ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
