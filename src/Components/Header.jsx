import React ,{useState} from 'react'
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
    <div className='bg-white w-full h-screen overflow-hidden'>
       <Navbar/>        
        <div className='bg-green-400 h-20 flex items-center '>

                  <div className=' gap-4 '>

         <div className='flex gap-2'> 
     <h2 className='text-yellow-300 text-4xl'> Savour </h2>
      <span className=' text-cyan-800 font-semibold text-2xl'> the Juicy the essence </span>
       <h2 className='text-4xl font-semibold text-yellow-300'> of fruit in every sip.</h2>
   </div>
    <div className=' '>

    </div>
   <div></div>



                   </div>
                
        </div>
        </div>
        
  )
}

export default Header;