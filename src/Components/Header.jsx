import React ,{useState} from 'react'
import Navbar from './Navbar'
const Header = () => {

  const [count, setCount] = useState(0);
const [fruits, setFruits] = useState
let fruits = 
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
                  {/* alert("why are you"); */}
                   </div>
                   <div className='' >

                   <h1>SANTA is Coming Home. </h1>

                   </div>



        </div>
        </div>
        
  )
}

export default Header;