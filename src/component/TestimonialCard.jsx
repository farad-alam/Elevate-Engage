import React from "react";

function TestimonialCard({ feedback, userImg, userName, userDesignation, userId:ratingId }) {
  return (
    <>
      <div className="flex flex-col overflow-hidden shadow-xl rounded-xl service-card-hover">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
          {/* User Feedback */}
          <div className="flex-1">
            <div className="rating rating-sm">
              <input
                type="radio"
                name={`rating-${ratingId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name={`rating-${ratingId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name={`rating-${ratingId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name={`rating-${ratingId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name={`rating-${ratingId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>

            <blockquote className="flex-1 mt-8">
              <p className="text-lg leading-relaxed text-gray-900 font-pj">
                {feedback}
                {/* “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.” */}
              </p>
            </blockquote>
          </div>
          {/* User Details */}
          <div className="flex items-center mt-8">
            <img
              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
              src={userImg}
              //   src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
              alt=""
            />
            <div className="ml-4">
              <p className="text-base font-bold text-gray-900 font-pj">
                {userName}
              </p>
              <p className="mt-0.5 text-sm font-pj text-gray-600">
                {userDesignation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
