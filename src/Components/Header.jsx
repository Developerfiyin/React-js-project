import React ,{useState} from 'react'
import Image1 from "../assets/strawberrysmothie.png"
import image2 from "../assets/strawberry-drink.png"
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
    <section className='bg-white w-full h-screen overflow-hidden'>
       <Navbar/>        
        <div className='bg-green-400 flex justify-evenly items-center '>

        <div className='flex w-1/2'> 
        <div>
       <h2 className='text-yellow-300 text-4xl font-semibold'> Savour </h2>
       <span className=' text-cyan-800 font-semibold text-2xl' > the Juicy essence </span>
       <h2 className='text-4xl font-semibold text-yellow-300'> of fruit in every sip.</h2>
        </div>

     </div>

    <div className=' bg-green-950 ' >
      <img src={Image1} alt=" " className=''/>
    </div>

   <div className=' '> 
     <div className='rounded-full h-20 w-20 bg-amber-800 '>
       <img src={image2} alt="" />
     </div>

    </div>
    </div>
     </section>
                
        
  )
}

export default Header;