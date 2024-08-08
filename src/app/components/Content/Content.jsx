"use client";
import React, { useContext, useState } from "react";
import Nav from "./Nav";
import About from "./Section/About";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";
import { Context } from "../../page";

const Content = () => {
  const [section, setSection] = useContext(Context);
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
    <div className="flex bg-gray-900 lg:ml-5 rounded-3xl lg:relative overflow-hidden flex-grow ">
      <Nav />
      <section className="p-5 w-full font-bold text-3xl min-w-20">
        {renderSection()}
      </section>
    </div>
  );
};

export default Content;
