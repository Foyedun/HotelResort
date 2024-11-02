import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import fabulous from "../assets/fabulous.png"

const Navbar = () => {
    const [nav, setNav] =useState(false)
 const handleNav = () => {
   setNav(!nav);
 };
  return (
    <nav className="pt-[10px] items-center ">
      <div className="container flex items-center justify-between pb-[5px]">
        <Link>
          <img src={fabulous} className="w-[150px] h-[150px]" alt="" />
        </Link>
        <ul className="hidden lg:flex items-center gap-10 font-normal text-2xl">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Rooms</Link>
          </li>
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact US</Link>
          </li>
          <li>
            <Link>Book</Link>
          </li>
        </ul>
        <GiHamburgerMenu onClick={handleNav} className="lg:hidden text-3xl"/>
        
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-white fixed z-[9999] top-0 left-0 w-full max-w-[300px] h-screen"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
           Logo
          </Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-y border-gray ">
            <Link to="/about-us" className="leading-4" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray ">
            <Link to="/about-us" className="leading-4" onClick={handleNav}>
              About Us
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <Link to="/contact-us" onClick={handleNav}>
              Contact Us
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <Link to="/collections" onClick={handleNav}>
              Collections
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
