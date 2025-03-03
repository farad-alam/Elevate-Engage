import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

function Header() {
  return (
    <>
      <header className="bg-lime-50 width">
        <Navbar />
        <Hero />
      </header>
    </>
  );
}

export default Header;