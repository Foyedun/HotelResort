import React from "react";

const AmenityCard = ({description}) => {
  return (
    <div className="ml-[80px] pt-[80px] w-[200px] h-[250px] text-xl font-semibold border-[1px] border-primary rounded-lg inline-block px-4 py-1">
      <div className="w-[30px] h-[30px] bg-primary rounded-full -mt-[50px] mb-[10px]">
        <p className="text-[10px] leading-none ml-[10px] whitespace-nowrap pt-[10px] font-bold">
          FREE WIFI
        </p>
      </div>
      <div className="text-center mt-[25px] px-2 text-[13px] whitespace-nowrap">
        <p className="font-semibold leading-snug   ">
          Stay connected with <br />
          complimentary high-speed <br />
          Wi-Fi available <br />
          throughout the resort. <br />
          Whether for work or leisure, <br />
          enjoy seamless internet <br />
          access wherever you are.
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmenityCard;
