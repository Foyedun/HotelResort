import React from "react";
import room from "../assets/room.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

const RoomOption = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <p className="text-center md:text-left md:ml-[80px] pt-[50px] text-lg md:text-xl font-semibold">
          Featured Hotels
          <br />
          in <span className="text-primary">Cairo</span>{" "}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:space-x-4 md:ml-[250px] pt-[60px]">
          <img
            src={room}
            alt="Room 1"
            className="w-full md:w-[400px] h-[300px] md:h-[400px] object-cover transform transition duration-300 hover:scale-105"
          />
          <img
            src={room2}
            alt="Room 2"
            className="w-full md:w-[400px] h-[300px] md:h-[400px] object-cover transform transition duration-300 hover:scale-105"
          />
          <img
            src={room3}
            alt="Room 3"
            className="w-full md:w-[400px] h-[300px] md:h-[400px] object-cover transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomOption;
