import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-200 p-2  flex shadow-2xl m-4 justify-between items-center">
      <div className=" flex justify-evenly">
        <div className="flex bg-green-500 items-center gap-2">
          <h1 className=" font-black text-3xl "> FRUIT JUICE</h1>
          <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
        </div>
        <div>
        <a href="About Us">About Us</a></div>
        <div> 
        <a href=""> Our Mission </a></div>
        <div>
        <a href=""> Flavours </a></div>
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
            <h4>Juice up</h4>

          </button>
        </div>
      </div>
      {/* <div className=' grid gap-4 grid-cols-3' >
        <div>
       <h1 className='text-black text-2xl font-semibold '>FRUIT JUICE</h1>
       <div className='w-5 h-5 bg-yellow-400 rounded-full '></div>
        </div>
   
  <div>
  <a href="" className=' cursor-pointer '></a>
  </div>
      </div> */}
    </div>
  );
};

export default Navbar;
