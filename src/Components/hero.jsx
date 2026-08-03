import React from "react";
import image1 from "../assets/stawberryand milk.jpg";
import image2 from "../assets/vegetable-drink.jpg";

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
          <button className=" border-2 border-gray-800 p-2 text-black font-semibold rounded-3xl text-center ">
            Best seller
          </button>

          <button className="border-2 border-bt-gray-400 p-2 text-black font-semibold rounded-3xl text-center ">
            Single Order
          </button>
          <button className=" border-2 border-b-gray-400 p-2 text-black font-semibold rounded-3xl text-center ">
            Weekly Order
          </button>
        </div>
      </div>

      {/**The grid ciol div that might later be flex/ */}

      <div className=" flex flex-col justify-evenly gap-3 ">
        <div>
          <img
            src={image1}
            alt="the first image, this one is with strawberry and milk."
          />
          <h3 className="text-2xl"> All-in-one-package</h3>
          <div className="justify-between flex bg-yellow-300">
            <button> 1 Box 12 (pack) </button>
            <h4> $24.99</h4>
          </div>
        </div>
        {/**div 2 */}
        <div>
          <div>
            <div>
              <img src={image2} alt="" className=" items-center" />
            </div>

            <h3 className="text-center "> Passion Fruit Guava</h3>
            <div className="flex justify-between bg-yellow-300">
              <button> 1 Box 12 (pack) </button>
              <button> $24.99</button>
            </div>
          </div>
        </div>{" "}
        {/** flexed div 3 */}
        <div>
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <button>1 box 12 (Pack) </button>
            <button> $24.99</button>
          </div>
        </div>{" "}
        {/** flexed div 3 */}
        <div>
          <div>
            <img src="" alt="" />
          </div>

          <h3> </h3>
          <div className=" flex justify-between bg-yellow-300 ">
            <button>1 box 12 (pack) </button>
            <button> $24.99</button>
          </div>
        </div>{" "}
        {/** flexed div 4 */}
      </div>
    </section>
  );
};

export default Hero;
