import React from "react";

function ColoredBG(props) {
  return (
    <div className="relative group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

      <div className="relative">{props.children}</div>
    </div>
  );
}

export default ColoredBG;
