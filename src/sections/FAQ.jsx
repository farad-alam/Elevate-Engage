import React from "react";
import faqData from "../assets/faqData.json";
import FaqCard from "../component/FaqCard";
import SplitTextComponent from "../DesignComponent/SplitTextComponent";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const trail = useTrail(faqData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: inView ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0 },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <section ref={ref}>
      {" "}
      {/* Attach ref to the FAQ section */}
      <div className="section width px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-base-100 text-bg-base-content">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-4xl font-bold md:leading-tight">
                <SplitTextComponent text={"Frequently"} />
                <br />
                <SplitTextComponent text={"asked questions"} />
              </h2>
              <p className="mt-1 hidden md:block text-lighter">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              {trail.map((style, index) => (
                <animated.div
                  key={index}
                  style={{ ...style, display: "block" }}
                >
                  <FaqCard
                    question={faqData[index].question}
                    answer={faqData[index].answer}
                  />
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

// import React from "react";
// import faqData from "../assets/faqData.json";
// import FaqCard from "../component/FaqCard";
// import SplitTextComponent from "../DesignComponent/SplitTextComponent";
// import { useTrail, animated } from "@react-spring/web";

// function FAQ() {
//   const trail = useTrail(faqData.length, {
//     from: { opacity: 0, transform: "translateY(20px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     delay: 200, // Adjust this if needed
//     config: { mass: 1, tension: 200, friction: 20 },
//   });

//   return (
//     <section>
//       <div className="section width px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-base-100 text-bg-base-content">
//         <div className="grid md:grid-cols-5 gap-10">
//           <div className="md:col-span-2">
//             <div className="max-w-xs">
//               <h2 className="text-4xl font-bold md:leading-tight">
//                 <SplitTextComponent text={"Frequently"} />

//                 <br />
//                 <SplitTextComponent text={"asked questions"} />
//               </h2>
//               <p className="mt-1 hidden md:block text-lighter">
//                 Answers to the most frequently asked questions.
//               </p>
//             </div>
//           </div>

//           <div className="md:col-span-3">
//             <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
//               {/* {faqData.map((faq, index) => (
//                 <FaqCard
//                   key={index}
//                   question={faq.question}
//                   answer={faq.answer}
//                 />
//               ))} */}

//               {trail.map((style, index) => (
//                 <animated.div
//                   key={index}
//                   style={{ ...style, display: "block" }}
//                 >
//                   <FaqCard
//                     question={faqData[index].question}
//                     answer={faqData[index].answer}
//                   />
//                 </animated.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FAQ;
