"use client";
import React, { useState } from "react";
import Image from "next/image";
import Profile from "./components/Profile";
import Content from "./components/Content/Content";
import BottomNav from "./components/BottomNav";

export const Context = React.createContext();

export default function Home() {
  const [section, setSection] = useState("about");

  return (
    <Context.Provider value={[section, setSection]}>
      <div className="flex min-h-screen items-center justify-center ">
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <main className="flex p-10 w-full justify-center flex-col lg:flex-row max-w-[1440px] gap-16 lg:gap-0 mb-16 lg:mb-0">
          <Profile />
          <Content />
        </main>
        <footer className=" fixed bottom-0 w-full text-center  z-50 lg:hidden ">
          <BottomNav />
        </footer>
      </div>
    </Context.Provider>
  );
}
