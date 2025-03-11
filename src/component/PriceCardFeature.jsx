import React from 'react'
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
function PriceCardFeature({feature}) {
  return (
    <>
      <div className="flex gap-2">
        <CheckIcon className="size-5 text-indigo-600 stroke-2" />
        <span className="">{feature}</span>
      </div>
    </>
  );
}

export default PriceCardFeature