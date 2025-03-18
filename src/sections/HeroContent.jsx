import React from "react";
import Button from "../component/Button";
import { useRef } from "react";
import VariableProximity from "../DesignComponent/VariableProximity";

function HeroContent() {
  const containerRef = useRef(null);
  return (
    <div className="space-y-6 md:space-y-12 ">
      <div id="herotitle">
        {/* <h1 className="heading">Elevate</h1> */}
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Elevate"}
            className={"heading"}
            fromFontVariationSettings="'wght' 800, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <p className="herodesc text-light">Your Business With Instagram</p>
        {/* <p className="herodesc"></p> */}
        {/* <h1 className="heading">Engage</h1> */}
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Engage"}
            className={"heading"}
            fromFontVariationSettings="'wght' 800, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>
      <div id="herodescription" className="w-8/12">
        <p className="text-sm text-light">
          Elevate Your Presence, Boost Engagement, and Dominate Instagram &
          TikTok!
        </p>
      </div>
      <a
        href="https://wa.link/xzqjqc"
        target="blank"
        className=" bg-brand text-black my-btn inline-block btnhover"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default HeroContent;
