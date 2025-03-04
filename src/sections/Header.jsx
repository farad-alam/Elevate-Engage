import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

function Header() {
  return (
    <>
      <header className="width">
        <div id="blur-layer" className=''>
          <div className='w-72 h-72 bg-indigo-500 bg-blur blur-[100px] top-28'></div>
          <div className='w-52 h-42 bg-brand bg-blur left-2/6 bottom-0'></div>
          <Navbar />
          <Hero />
        </div>
      </header>
    </>
  );
}

export default Header;