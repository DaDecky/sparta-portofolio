import React, { useContext } from "react";
import { Context } from "../page";

const BottomNav = () => {
  const [section, setSection] = useContext(Context);
  return (
    <div
      className={`justify-center flex gap-10 rounded-t-lg backdrop-filter  backdrop-blur-[1px] p-2 pr-10 bg-gray-700/80`}
    >
      <button
        className={`text-md  hover:text-gray-500 ease-in-out duration-300 ${
          section == "about" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("about");
        }}
      >
        About
      </button>
      <button
        className={`text-md  hover:text-gray-500 ease-in-out duration-300 ${
          section == "portfolio" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("portfolio");
        }}
      >
        Portfolio
      </button>
      <button
        className={`text-md  hover:text-gray-500 ease-in-out duration-300 ${
          section == "contact" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("contact");
        }}
      >
        Contact
      </button>
    </div>
  );
};

export default BottomNav;
