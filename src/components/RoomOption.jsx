import React from "react";
import room from "../assets/room.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

const RoomOption = () => {
  return (
    <section>
      <div className="container">
        <p className="ml-[80px] pt-[50px]">
          Featured Hotels
          <br />
          in <span className="text-primary">Cairo</span>{" "}
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center md:space-x-4 ml-[250px] pt-[60px] pb-[182px]">
          <img
            src={room}
            alt=""
            className="w-[400px] h-[400px] object-cover transform transition duration-300 hover:scale-105"
          />
          <img
            src={room2}
            alt=""
            className="w-[400px] h-[400px] object-cover transform transition duration-300 hover:scale-105 mt-4 md:mt-0"
          />
          <img
            src={room3}
            alt=""
            className="w-[400px] h-[400px] object-cover transform transition duration-300 hover:scale-105 mt-4 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomOption;
