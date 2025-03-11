import React from "react";
import HeroContent from "./HeroContent";
import HeroBanar from "./HeroBanar";
import HeroStatics from "./HeroStatics";

function Hero() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 justify-between items-center mt-10">
      <HeroContent />
      <HeroBanar />
      {/* <HeroStatics /> */}
    </div>
  );
}

export default Hero;
