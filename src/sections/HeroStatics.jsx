import React from "react";
import HeroStaticCard from "../component/HeroStaticCard";
import {
  PencilSquareIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
function HeroStatics() {
  return (
    <div
      className="absolute left-2/6 top-3/4 w-80
      flex justify-between gap-2
     p-4 bg-slate-950/40 backdrop-blur-3xl rounded-lg"
    >
      <HeroStaticCard
        icon={<PencilSquareIcon className="size-6" />}
        title="700+"
        desc="Successfull Project"
      />
      <HeroStaticCard
        icon={<UserGroupIcon className="size-6" />}
        title="20+"
        desc="Talented
Team Member"
      />
      <HeroStaticCard
        icon={<PresentationChartLineIcon className="size-6" />}
        title="100%"
        desc="Organic
Strategy"
      />
      {/* <div class=" bg-slate-950/40 backdrop-blur-3xl rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">Blur Card</h2>
        <p class="text-gray-700">
          This is an example of a card with a blur effect using Tailwind CSS.
        </p>
      </div> */}
    </div>
  );
}

export default HeroStatics;
