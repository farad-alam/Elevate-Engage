import React from "react";
import faqData from "../assets/faqData.json";
import FaqCard from "../component/FaqCard";
function FAQ() {
  return (
    <section>
      <div class="section width px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-base-100 text-bg-base-content">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2">
            <div class="max-w-xs">
              <h2 class="subtitle md:leading-tight">
                Frequently
                <br />
                asked questions
              </h2>
              <p class="mt-1 hidden md:block text-lighter">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>

          <div class="md:col-span-3">
            <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              {faqData.map((faq) => (
                <FaqCard question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
