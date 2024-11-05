import React from "react";
import AmenityCard from "./AmenityCard"; 

const Amenities = () => {
  
  return (
    <div className="container">
      <div className="flex flex-wrap gap-4 pt-[50px]">
        {[...Array(3)].map((_, index) => (
          <AmenityCard key={index} />
        ))}

    
        {[...Array(3)].map((_, index) => (
          <AmenityCard key={index + 3} />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
