import React ,{useState} from 'react'
import Image1 from "../assets/strawberrysmothie.png"
import image2 from "../assets/strawberry-drink.png"
import { FaArrowRight } from "react-icons/fa6";

import Navbar from './Navbar'
const Header = () => {

  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState([{
      id:1, name: "Apple"},
      { id: 2, name: "Banana"},
      {id: 3, name:"Orange"},
     {id: 4, name:"Grapes"},
      {id:5, name:"Mango"}, 
       {id: 6, name: "Pineapple"},
     {id:7, name: "Watermelon"}]);

       const [newFruit, setNewFruit] = useState("");

//    {fruits.map((fruit)=>(
//     <div key={fruit}>
//         <span>{fruit}</span>

//         <button
//             onClick={()=>deleteFruit(fruit)}
//         >
//             Delete
//         </button>
//     </div>
// ))}

 function searchInput() {
   setCount(...search, [])
 }

  const  increaseCount = () => {
    return(
    setCount(count + 1 )

    )
  }
  
  return (
    <section className='bg-white w-full h-screen '>
       <Navbar/>        
        <div className='bg-green-400 m-2 rounded-lg justify-evenly grid-cols-3 grid items-center '>

<div className='flex flex-col gap-5 '>
   <div className=' text-center '> 
        
       <h2 className='text-yellow-300 text-5xl font-semibold'> Savour  <span className='text-4xl font-semibold text-amber-700'> the Juicy essence</span> </h2>
       {/* <span className=' text-amber-700 pl-4 font-semibold text-5xl '> essence  </span> */}
      
      <h2 className='text-5xl font-semibold text-yellow-300'> of fruit in every sip.</h2> 
     
     </div>

     <div> {/** the second header div by the left */}
       <h4 className='text-center '>
      Taste nature's best in every <strong> drop</strong>  with real <strong>fruit </strong>  and vibrant <strong> flavour
        </strong> 
   </h4>
     </div>
      


   <div className='m-2 '>
    <button className='cursor-pointer hover:bg-yellow-400 px-6 flex items-center  gap-4  mx-auto bg-yellow-300 p-3 rounded-3xl '> 
      <strong> Sip Fresh</strong>
       <FaArrowRight className='text-center ' />
       </button>

   </div>

</div>
       

    <div className=' bg-amber-800 h-screen' >
      <img src={Image1} alt=" " className='object-fit object-'/>
    </div>

   <div className='justify-center items-center flex flex-col gap-4 
 '> 
     <div className='rounded-full h-30 w-30 bg-amber-800 '>
       <img src={image2} alt="" className='flex justify-center mx-auto' />
     </div>

     <div className='text-2xl text-center text-yellow-300 '>
      <h2 className='text-6xl text-center '> 78% </h2>
     </div>

     <div>
      <p className='text-center text-amber-300 font-medium'>Natural ingredients used in flavours</p>
     </div>

    </div>
    </div>
     </section>
                
        
  )
}

export default Header;