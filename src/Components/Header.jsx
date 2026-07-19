import React ,{useState} from 'react'
import Navbar from './Navbar'
const Header = () => {

  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState([{
      id:1,name: "Apple"},
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
        <div className='bg-green-400 h-20 w-full mx-auto '>

                  <div className='flex justify-center gap-4 '>

   <div> 
    <h2 className='text-green-400'> Savour </h2>
   </div>
   <div></div>
   <div></div>



                   </div>
                
        </div>
        </div>
        
  )
}

export default Header;