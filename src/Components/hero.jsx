import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between m-4  ">
        <div>
          <h1>
            <strong> Discover </strong> our range
          </h1>
        </div>
        <div className="bg-red-8 bg-black ">
          <button className=" bg-white border-gray-600 p-2 text-black font-semibold">
            {" "}
            Best seller
          </button>font-semibold
          <button className=" bg-white border-gray-600 p-2 text-black font-semibold">
            {" "}
            Single Order
          </button>
          <button className=" bg-white border-gray-600 p-2 text-black font-semibold">
            Weekly Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
