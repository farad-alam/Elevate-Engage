import React from 'react'
import Button from '../component/Button';

function Navbar() {
  return (
    <>
      <div className="navbar  width">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Srvices</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Client Success</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <img src="/elevate_engage_logo.jpg" alt="" className='w-12 rounded-xl' />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-semibold">Home</a>
            </li>
            <li>
              <a>Srvices</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Client Success</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button
            type="button"
            text="Contact Us"
            className="hidden md:block btn rounded-4xl bg-[#FFFF00] border-2 border-amber-200"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar