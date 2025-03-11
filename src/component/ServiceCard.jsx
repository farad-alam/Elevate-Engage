import React from "react";

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      className="lg:basis-1/4 rounded-lg service-card-hover
    space-y-3 p-4 shadow  bg-base-200 text-base-content"
    >
      {icon}
      <h4 className="text-md font-semibold">{title}</h4>
      <p className="text-sm text-lighter leading-tight">{desc}</p>
    </div>
  );
}

export default ServiceCard;
