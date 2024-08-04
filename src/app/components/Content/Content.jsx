"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import About from "./Section/About";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";

export const Context = React.createContext();

const Content = () => {
  const [section, setSection] = useState("about");

  const renderSection = () => {
    switch (section) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Context.Provider value={[section, setSection]}>
      <div className="flex flex-grow w-100 bg-gray-900 ml-5 rounded-3xl relative overflow-hidden min-w-fit">
        <Nav />
        <section className="p-5  w-full font-bold text-3xl ">
          {renderSection()}
        </section>
      </div>
    </Context.Provider>
  );
};

export default Content;
