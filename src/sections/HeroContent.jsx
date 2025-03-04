import React from "react";
import Button from "../component/Button";

function HeroContent() {
  return (
      <div className="space-y-6 md:space-y-12 ">
        <div id="herotitle">
          <h1 className="heading">Elevate</h1>
          <p className="herodesc">Your Business With Instagram</p>
          {/* <p className="herodesc"></p> */}
          <h1 className="heading">Engage</h1>
        </div>
        <div id="herodescription" className="w-8/12">
          <p className="text-sm text-gray-500">
            Elevate Your Presence, Boost Engagement, and Dominate Instagram &
            TikTok!
          </p>
        </div>
        <Button
          type="button"
          text="WhatsApp"
          className="bg-brand btn rounded-3xl"
        />
      </div>
    
  );
}

export default HeroContent;
