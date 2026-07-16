import React from "react";
import { useState } from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";



const Navbar = () => { 

  const [lightMode, setLightMode] = useState(false);

 function lightMod() {
    
setLightMode(!lightMode)
//  }darkMode ? "dark" : "light"
 }

  return (
    <div className={"border-b-2 cursor-pointer border-gray-300 p-0.5 rounded-2xl flex m-4 justify-between items-center mx-auto"} >

      <div className=" flex justify-evenly items-center gap-4 ">
        <div className="flex items-center gap-3 p-4">
          <h1 className=" font-black text-3xl text-bold ">FRUIT JUICE</h1>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
        </div>

        <div>
        <a href="#about us" className=" text-xl font-semibold text-black ">About Us</a>
        </div>

        <div> 
        <a href="#our mission" className="text-xl font-semibold text-black ">Our Mission </a>
        </div>

        <div>
        <a href="#flavours" className="text-xl font-semibold text-black ">Flavours </a>
        </div>

      </div>
      <div className="flex justify-evenly items-center gap-4">
        <div>
          <a href="" className="cursor-pointer">
          <FiSearch className="text-2xl "/>
          </a>
          </div>

        <div>
          <a href="" className="cursor-pointer"> 
             <IoBagOutline className="text-2xl text-black" />
             </a>
        </div>

        <div>
          <button className="bg-yellow-300 flex p-2 rounded-3xl cursor-pointer justify-evenly items-center gap-0.5 ">
            <h4 className="font-semibold text-xl text-center ">Juice up</h4>
          <IoArrowForwardOutline className="text-xl text-center font-bold"/>
          </button>
        </div>

       
      </div>
    
    </div>
  );
};

export default Navbar;
