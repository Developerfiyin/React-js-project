import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1>
          
            <strong> Discover </strong> our range 
          </h1>
        </div>
        <div>
          <button className=" bg-white border-gray-500 p-2 "> Best seller</button>
          <button className=" bg-white border-gray-500 p-2 "> Single Order</button>
          <button className=" bg-white border-gray-500 p-2 ">Weekly Order </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
