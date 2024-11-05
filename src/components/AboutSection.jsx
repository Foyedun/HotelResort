import React from "react";
import unsplashone from "../assets/unsplashone.svg";
import unsplashtwo from "../assets/unsplashtwo.svg";
import frame from "../assets/frame.svg";
import savetime from "../assets/savetime.svg";
const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <p className="pt-[30px] ml-[80px] pb-[20px] text-[30px] font-bold ">
          Our <span className="text-primary">Best</span> Rooms!
        </p>
        <div className="ml-[80px]  w-[280px] h-[200px] text-xl font-semibold border-[5px] border-primary bg-primary rounded-lg inline-block px-4 py-1">
          <p className="font-bold text-center text-white pt-[10px] text-[30px]">
            Save 10% Off
          </p>
          <p className=" text-[13px] font-normal  text-center leading-snug pt-[30px]">
            Enjoy a 10% discount on your <br />
            stay when you book directly with us.
            <br />
            Experience luxury and savings—reserve <br />
            your getaway today!
          </p>
        </div>
        <div className="ml-[80px] w-[280px] h-[200px]">
          <img src={unsplashone} className="pt-[25px]" alt="" />
        </div>
        <div className="flex w-[400px] h-[410px] justify-end ml-[600px] mt-[-400px] pb-[0p8x] gap-4">
          <img src={unsplashtwo} className="" alt="Image 1" />
          <img src={frame} alt="Image 2" />
        </div>
        <div className="  mx-auto w-[500px] h-[400px] pt-[40px]">
          <img src={savetime} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
