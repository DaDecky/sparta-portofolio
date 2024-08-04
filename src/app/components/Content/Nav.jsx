import Link from "next/link";
import React, { useContext, useState } from "react";
import { Context } from "./Content";

const Nav = () => {
  const [section, setSection] = useContext(Context);
  return (
    <div
      className={` hidden lg:flex gap-10 absolute right-0 bg-gray-700 rounded-bl-md p-5 pr-10`}
    >
      <button
        className={`text-xl  hover:text-gray-500 ease-in-out duration-300 ${
          section == "about" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("about");
        }}
      >
        About
      </button>
      <button
        className={`text-xl  hover:text-gray-500 ease-in-out duration-300 ${
          section == "portfolio" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("portfolio");
        }}
      >
        Portfolio
      </button>
      <button
        className={`text-xl  hover:text-gray-500 ease-in-out duration-300 ${
          section == "contact" ? "text-yellow-300" : "text-white"
        }`}
        onClick={() => {
          setSection("contact");
        }}
      >
        Contact
      </button>
      {/* <Link href={"#"}>About</Link> */}
    </div>
  );
};

export default Nav;
