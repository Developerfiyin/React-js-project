import React from "react";
import image1 from "../assets/stawberryand milk.jpg"

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
          <button className=" border-2 border-b-gray-800 p-2 text-black font-semibold rounded-3xl text-center ">
            Best seller
          </button>

          <button className="border-2 border-b-gray-600 p-2 text-black font-semibold rounded-3xl text-center ">
            Single Order
          </button>
          <button className=" border-2 border-b-gray-600 p-2 text-black font-semibold rounded-3xl text-center ">
            Weekly Order
          </button>
        </div>
      </div>

      {/**The grid ciol div that might later be flex/ */}

      <div className=" flex justify-evenly gap-3 ">

        <div>
          <img src="" alt="" />
          <h3></h3>
          <button></button>
        </div>
        <div>
          
          
          </div> {/** flexed div 2 */}
        <div></div>   {/** flexed div 3 */}
        <div></div>   {/** flexed div 4 */}

      </div>
    </section>
  );
};

export default Hero;
