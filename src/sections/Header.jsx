import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
  return (
    <>
      <header className="width relative mb-12 bg-[url('/bggrid.png')] bg-cover bg-top">
        <div id="blur-layer" className="">
          <div className="w-72 h-72 bg-indigo-500 bg-blur blur-[100px] top-28"></div>
          <div className="w-52 h-42 opacity-80 bg-brand bg-blur blur-[100px] right-0 bottom-0"></div>
          <div className="w-52 h-42 opacity-60 bg-brand bg-blur blur-[100px] left-0 bottom-0"></div>
          <Navbar />
          <Hero />
        </div>
      </header>
      {/* <div id="dotedimg" className="">
        <img
          src="/doted.png"
          className="bg-blur bottom-12 -right-24 w-46 md:-bottom-8 md:-right-28 md:w-62"
          alt=""
        />
      </div> */}
      {/* <section className="w-full h-52 bg-amber-50"></section> */}
    </>
  );
}

export default Header;
