import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Aurora from "../DesignComponent/Aurora";

// 4f39f6

function Header() {
  return (
    <>
      <header data-theme="dark" className="relative mb-12 bg-transparent">
        <div className="absolute -z-10 w-full h-[500px]">
          <Aurora
            colorStops={["#00D8FF", "#00D8FF", "#00D8FF"]}
            blend={0.8}
            amplitude={0.9}
            speed={0.3}
          />
        </div>
        <section
          id="header"
          className="width bg-[url('/bggrid.png')] bg-cover bg-top"
        >
          <div id="blur-layer" className="">
            {/* <div className="w-72 h-72 bg-indigo-500 bg-blur blur-[100px] top-28"></div> */}
            {/* <div className="w-52 h-42 opacity-80 bg-brand bg-blur blur-[100px] right-0 bottom-0"></div>
          <div className="w-52 h-42 opacity-60 bg-brand bg-blur blur-[100px] left-0 bottom-0"></div> */}
            <Navbar />
            <Hero />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
