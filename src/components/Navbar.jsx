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
    <nav className="py-[5px] items-center">
      <div className="container flex items-center justify-between">
        <Link>
          <img src={fabulous} className="w-[100px] h-[100px]" alt="" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8 font-normal text-xl">
          <li>
            <Link className="hover:text-primary transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition duration-200">
              Rooms
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition duration-200">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition duration-200">
              Contact Us
            </Link>
          </li>
          <li className="border bg-primary rounded-lg">
            <Link className="hover:text-white transition duration-200 px-4 py-2 block">
              Book
            </Link>
          </li>
        </ul>
        <GiHamburgerMenu onClick={handleNav} className="lg:hidden text-3xl" />
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
          <Link>Logo</Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul>
          <li className="text-xl px-[15px] py-[15px] font-normal text-tertiary border-b border-gray hover:bg-gray-100">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[15px] font-normal text-tertiary border-b border-gray hover:bg-gray-100">
            <Link to="/about-us" onClick={handleNav}>
              About Us
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[15px] font-normal text-tertiary border-b border-gray hover:bg-gray-100">
            <Link to="/contact-us" onClick={handleNav}>
              Contact Us
            </Link>
          </li>
          <li className="text-xl px-[15px] py-[15px] font-normal text-tertiary border-b border-gray hover:bg-gray-100">
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
