import React from "react";
import TestimonialCard from "../component/TestimonialCard";
import ColoredBG from "../component/ColoredBG";

function Testimonial() {
  return (
    <section className="bg-gray-50 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 section width">
        <div className="flex flex-col items-center">
          {/* User Feedback Heading */}
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          {/* User Feedback */}
          <div className="relative mt-10 md:mt-24 md:order-2">
            <ColoredBG>
            <div className="relative bg-base-100 rounded-2xl p-2 grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              
                <TestimonialCard
                  feedback={`“You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”`}
                  userImg={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png`}
                  userName={"Jony Deep"}
                  userDesignation={"Genarel Manager at BeautyCop"}
                  userId={1}
                />
              

              
                <TestimonialCard
                  feedback={`“Simply the best. Better than all the rest. I’d
                        recommend this product to beginners and advanced users.”`}
                  userImg={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png`}
                  userName={"Jony Deep"}
                  userDesignation={"Genarel Manager at BeautyCop"}
                  userId={2}
                />
              
                <TestimonialCard
                  feedback={`“I cannot believe that I have got a brand new landing
                        page after getting Omega. It was super easy to edit and
                        publish.”`}
                  userImg={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png`}
                  userName={"Jony Deep"}
                  userDesignation={"Genarel Manager at BeautyCop"}
                  userId={3}
                />
            </div>
            </ColoredBG>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
