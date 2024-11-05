import React from "react";
import search from "../assets/searchbox.svg";
const Hero = () => {
  return (
    <section className="bg-heroBg bg-cover w-[1500px] pt-[100px] pb-[88px]">
      <div className="container">
        <h1 className="text-[70px] leading-snug text-justify ml-[80px] ">
          Find Your Hotels & Many More ,<br /> Touch The Dream!{" "}
        </h1>
        <p className="text-white leading-normal text-[20px] font-medium ml-[90px]">
          Welcome to Fabulous Hotel Resort where luxury meets relaxation. <br />Enjoy
          breathtaking views, world-class amenities, and unforgettable
          experiences. <br />Book your stay and escape to paradise today!
        </p>
        <div className="pt-[70px]">
          <img src={search} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
