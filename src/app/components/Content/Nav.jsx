import React, { useContext, useState } from "react";
import { Context } from "../../page";

const Nav = () => {
  const [section, setSection] = useContext(Context);
  return (
    <div
      className={`hidden absolute right-0 lg:flex gap-10 bg-gray-700 rounded-bl-md p-5 pr-10`}
    >
      <button
        className={`text-xl  hover:${
          section == "about" ? "text-yellow-300" : "text-gray-500"
        } ease-in-out duration-300 ${
          section == "about" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("about");
        }}
      >
        About
      </button>
      <button
        className={`text-xl  hover:${
          section == "experience" ? "text-yellow-300" : "text-gray-500"
        } ease-in-out duration-300 ${
          section == "experience" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("experience");
        }}
      >
        Experience
      </button>
      {/* <button
        className={`text-xl  hover:text-gray-500 ease-in-out duration-300 ${
          section == "contact" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("contact");
        }}
      >
        Contact
      </button> */}
    </div>
  );
};

export default Nav;
