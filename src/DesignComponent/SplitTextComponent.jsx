import SplitText from "./SplitText";

import React from "react";

function SplitTextComponent({text}) {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <SplitText
      text={text}
      className=""
      delay={50}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
}

export default SplitTextComponent;
