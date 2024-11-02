import React from "react";
import search from "../assets/searchbox.svg";
const Hero = () => {
  return (
    <section className="bg-heroBg bg-cover bg-center  pt-[100px] pb-[88px]">
      <div className="container">
        <h1 className="text-[70px] leading-tight ">
          Find Your Hotels & Many More , Touch The Dream!{" "}
        </h1>
        <p className="text-white leading-normal">
          Welcome to Fabulous Hotel Resort where luxury meets relaxation. Enjoy
          breathtaking views, world-class amenities, and unforgettable
          experiences. Book your stay and escape to paradise today!
        </p>
        <div className="pt-[70px]">
          <img src={search} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
