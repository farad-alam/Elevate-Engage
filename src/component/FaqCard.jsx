import React from "react";

function FaqCard({ question, answer }) {
  return (
    <>
      <div
        class="hs-accordion pt-6 pb-3"
        id="hs-basic-with-title-and-arrow-stretched-heading-five"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-700 rounded-lg transition hover:text-gray-400 focus:outline-hidden focus:text-gray-500 dark:text-neutral-300 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          aria-expanded="false"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
        >
          {question}
          <svg
            class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-five"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          role="region"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
        >
          <p class="text-gray-600 dark:text-neutral-400">{answer}</p>
        </div>
      </div>
    </>
  );
}

export default FaqCard;
