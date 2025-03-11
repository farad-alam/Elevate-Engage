import React, { useState } from "react";
import PriceCard from "../component/PriceCard";
import packageData from "../assets/packageData.json";
function Pricing() {
  // const [features, setFeatures] = useState([])
  let features = [
    " 3 Days free trial",
    "Organic growth 100-150",
    "Strategic engagement",
    "Precision Audit",
    " Hashtag Strategy",
    "Personalized Strategy",
    "Competitive Analysis ",
    "Welcome DMs",
    "Post schedule ",
    "Post optimization",
  ];

  return (
    <>
      <section data-theme="" className="bg-base-100 text-base-content">
        <div className="width section">
          <h2 className="subtitle text-center mb-14">Our plans for you</h2>
          <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                {packageData.map((packages, index) => {
                  return (
                    <PriceCard
                      key={index}
                      packageTitle={packages.packageTitle}
                      packageDescription={packages.packageDescription}
                      packageFeatureList={packages.packageFeatureList}
                      price={packages.price}
                      buttonTxt={packages.buttonTxt}
                      isMain={packages.isMain}
                    />
                  );
                })}
              </div>
              {/* Nedd help to Decide */}
              <div className="text-center text-sm text-gray-500 sm:text-base">
                Need help deciding?{" "}
                <a
                  href="#"
                  className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Get in touch
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
