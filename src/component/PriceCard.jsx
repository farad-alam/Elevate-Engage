import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import PriceCardFeature from "./PriceCardFeature";

function PriceCard({
  packageTitle,
  packageDescription,
  packageFeatureList,
  price,
  buttonTxt,
  isMain = false,
}) {
  return (
    <>
      {/* ------------------------------------------------------------->>>>>>>>> */}
      <div
        className={`relative flex flex-col rounded-lg   ${
          isMain ? "main-pricing-card" : "child-pricing-card"
        } p-4 pt-6  pricing-card-hover`}
      >
        {/* Package Details */}
        <div className="mb-12">
          {isMain && (
            <>
              <div className="absolute inset-x-0 -top-3 flex justify-center">
                <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  most popular
                </span>
              </div>
            </>
          )}

          <div className="mb-2 text-center text-2xl font-bold text-gray-800">
            {/* Package Title */}
            {packageTitle}
          </div>

          <p className="mx-auto mb-8 px-8 text-sm text-center text-gray-500">
            {/*Package Description */}
            {packageDescription}
          </p>
          {/*Package Features */}

          <div className="space-y-2">
            {/* <!-- check - start --> */}
            {packageFeatureList.map((item, index) => {
              return <PriceCardFeature key={index} feature={item} />;
            })}

            {/* <!-- check - end --> */}
          </div>
        </div>

        {/* Package Pricing */}
        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600">$</span>
            <span className="text-4xl font-bold text-gray-800">{price}</span>
            <span className="text-gray-500">/month</span>
          </div>

          <a
            href="#"
            className="block rounded-lg  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 main-pricing-btn focus-visible:ring  md:text-base"
          >
            {buttonTxt}
          </a>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
