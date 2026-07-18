import React ,{useState} from 'react'
import Navbar from './Navbar'
const Header = () => {

  const [count, setCount] = useState(0);
const [search, setSearch] = useState([{
  id:1,name: "Apple"},

 { id: 2, name: "Banana"},
  {id: 3, name:"Orange"},
   {id: 4, name:"Grapes"},
    {id:5, name:"Mango"}, 
    {id: 6, name: "Pineapple"},
     {id:7, name: "Watermelon"}]);

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

                  <div className='flex justify-between '>
                  <h2 className='text-4xl font-bold text-black'> Savour <span className='text-red-300 text-2xl'>the Juicy essence in </span>every juice </h2>
                  <button className='p-2 items-center font-semibold justify-center bg-red-600 rounded-2xl mt-4 mx-2 hover:bg-red-500 ' onClick={increaseCount}> You have clicked this {count} </button>
                   </div>
                   <div className='' >

                   <h1>SANTA is Coming Home. </h1>

                   </div>



        </div>
        </div>
        
  )
}

export default Header;