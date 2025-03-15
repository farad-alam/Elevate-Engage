import AnimatedContent from "./AnimatedContent";

import React from 'react'

function AnimateComponent(props) {
  return (
    <>
      <AnimatedContent
        distance={200}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.1}
        animateOpacity
        scale={0.8}
        threshold={0.2}
      >
        {props.children}
      </AnimatedContent>
      
    </>
  );
}

export default AnimateComponent


