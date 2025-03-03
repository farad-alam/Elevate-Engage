import React from 'react'
import HeroContent from './HeroContent'
import HeroBanar from './HeroBanar'

function Hero() {
  return (
    <div className='flex md:flex-wrap lg:flex-nowrap gap-8 justify-between mt-17'>
      <HeroContent />
      <HeroBanar />
    </div>
  );
}

export default Hero