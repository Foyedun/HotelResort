import React from "react";
import media from "../assets/media.png";
const Testimonial = () => {
  return (
    <section className="pt-2">
      {" "}
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap gap-8 justify-between ml-[80px] pb-[50px] -mt-[200px]">
          {" "}
          {/* About Us Section */}
          <div className="w-[200px]">
            <h1 className="font-bold text-[20px]">About Us</h1>
            <p className="font-normal text-[13px] leading-snug pt-2">
              Welcome to Fabulous Hotel Resort, where luxury meets relaxation.
              We are dedicated to providing our guests with unforgettable
              experiences through exceptional service, stunning accommodations,
              and a serene atmosphere. Our mission is to create a home away from
              home, ensuring every visit is memorable.
            </p>
          </div>
          {/* Offers Section */}
          <div className="w-[200px]">
            <h1 className="font-bold text-[20px]">Offers</h1>
            <ul className="text-[13px] font-normal space-y-2 pt-2">
              <li>Payment</li>
              <li>Pricing</li>
              <li>Subscription</li>
              <li>Customer</li>
              <li>Review</li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="w-[200px]">
            <h1 className="font-bold text-[20px]">Company</h1>
            <ul className="text-[13px] font-normal space-y-2 pt-2">
              <li>About Us</li>
              <li>Recent View</li>
              <li>Contact Us</li>
              <li>Conditions</li>
            </ul>
          </div>
          {/* City Section */}
          <div className="w-[200px]">
            <h1 className="font-bold text-[20px]">City</h1>
            <ul className="text-[13px] font-normal space-y-2 pt-2">
              <li>Cairo</li>
              <li>Giza</li>
              <li>Luxor</li>
              <li>Aswan</li>
            </ul>
          </div>
        </div>
        <div className="ml-[80px]">
          <img src={media} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
