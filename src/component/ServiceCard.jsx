import React from "react";
//  className="lg:basis-1/4 rounded-lg service-card-hover
//     space-y-3 p-4 shadow bg-base-300 dark:bg-neutral-950 text-base-content"

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="space-y-3">
      {icon}
      <h4 className="text-md font-semibold">{title}</h4>
      <p className="text-sm text-lighter leading-tight">{desc}</p>
    </div>
  );
}

export default ServiceCard;
