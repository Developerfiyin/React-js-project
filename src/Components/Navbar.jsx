import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-200 p-2  flex shadow-2xl m-4 justify-between items-center">

      <div className=" flex justify-evenly ">
        <div className="flex bg-green-500 items-center gap-2">
          <h1 className=" font-black text-3xl">FRUIT JUICE</h1>
          <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
        </div>

        <div>
        <a href="#about us">About Us</a>
        </div>


        <div> 
        <a href="#our mission" className="text-xl ">Our Mission </a>
        </div>

        <div>
        <a href="#flavours">Flavours </a>
        </div>

      </div>
      <div className="flex justify-evenly ">
        <div>
          <a href=""></a>
          </div>

        <div>
          <a href=""> </a>
        </div>

        <div>
          <button className="bg-yellow-200 flex p-3 rounded-3xl  ">
            <h4 className=" font-semibold text-xl ">Juice up</h4>
          </button>
        </div>

      </div>
    
    </div>
  );
};

export default Navbar;
