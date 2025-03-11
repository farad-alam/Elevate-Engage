import React from "react";
import Orb from "../DesignComponent/Orb";

function HeroBanar() {
  return (
    <div className="md:flex md:justify-center overflow-hidden relative">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      <img
        src="/Elevate Banar.png"
        className="w-8/12 md:w-9/12 h-auto object-contain"
        alt=""
      />
    </div>
  );
}

export default HeroBanar;
