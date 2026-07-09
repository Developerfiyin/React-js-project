import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className="bg-blue-200 p-4 rounded-2xl flex shadow-2xl m-4 justify-between items-center">

      <div className=" flex justify-evenly items=center gap-4 ">
        <div className="flex bg-green-500 items-center gap-3 p-4">
          <h1 className=" font-black text-3xl text-black ">FRUIT JUICE</h1>
          <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
        </div>

        <div>
        <a href="#about us" className=" text-xl text-black ">About Us</a>
        </div>

        <div> 
        <a href="#our mission" className="text-xl text-black ">Our Mission </a>
        </div>

        <div>
        <a href="#flavours" className="text-xl text-black ">Flavours </a>
        </div>

      </div>
      <div className="flex justify-evenly items-center gap-4">
        <div>
          <a href="">
          <FiSearch className="text-2xl"/>
          </a>
          </div>

        <div>
          <a href=""> 
             <IoBagOutline className="text-2xl" />
             </a>
        </div>

        <div >
          <button className="bg-yellow-200 flex p-2 rounded-3xl justify-between items-center gap-0.5 ">
            <h4 className="font-semibold text-xl ">Juice up</h4>
          <IoArrowForwardOutline className="text-xl font-bold"/>

          </button>
        </div>
       
      </div>
    
    </div>
  );
};

export default Navbar;
