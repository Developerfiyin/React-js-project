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
    <section className='bg-white w-full h-screen '>
       <Navbar/>        
        <div className='bg-green-400 m-2 rounded-lg justify-evenly grid-cols-3 grid items-center '>

        <div className=''> 
        
       <h2 className='text-yellow-300 text-center text-6xl font-semibold'> Savour  <span className='text-5xl font-semibold text-center text-amber-700'> the Juicy</span> </h2>
       <span className=' text-amber-700 pl-4 font-semibold text-5xl '> essence <h2 className='text-6xl text-center font-semibold text-yellow-300'> of fruit in every sip.</h2>
       </span>


     </div>

    <div className=' bg-green-950 ' >
      <img src={Image1} alt=" " className=''/>
    </div>

   <div className='mx-auto '> 
     <div className='rounded-full h-20 w-20 bg-amber-800 '>
       <img src={image2} alt="" />
     </div>

    </div>
    </div>
     </section>
                
        
  )
}

export default Header;