import React from "react";


function HeroStaticCard({icon, title, desc}) {
  return (
    <>
      {/* hero static card */}
      <div className="flex flex-col justify-center items-center gap-1 p-1 bg-amber-50 rounded-lg ">
        <div className="icons bg-brand flex justify-center p-1 rounded-full border border-indigo-500">
          {icon}
        </div>
        <div className="tittles">
          <p className="font-semibold">{title}</p>
        </div>
        <div className="descriptions text-center w-[74px]">
          <p className="text-[10px] text-gray-600">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default HeroStaticCard;
