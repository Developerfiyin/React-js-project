import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between m-2  ">
        <div>
          <h1>
            <strong> Discover </strong> our range
          </h1>
        </div>
        <div className=" flex gap-3">
          <button className=" border-2 border-b-gray-800 p-2 text-black font-semibold rounded-3xl">
            Best seller
          </button>
          font-semibold
          <button className="border-2 border-b-gray-600 p-2 text-black font-semibold rounded-3xl">
            Single Order
          </button>
          <button className=" border-2 border-b-gray-600 p-2 text-black font-semibold rounded-3xl">
            Weekly Order
          </button>
        </div>
      </div>


      {/**The grid ciol div that migh later be flex/ */}


      <div className=" flex justify-evenly gap-3 ">

      </div>
    </section>
  );
};

export default Hero;
