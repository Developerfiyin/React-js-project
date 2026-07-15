import React ,{useState} from 'react'
import Navbar from './Navbar'
const Header = () => {

  const [count, setCount] = useState(0);

  const  increaseCount = () => {
    return(
    setCount(count + 1 )

    )
  }
  
  return (
    <div className='bg-white w-full h-screen  '>
       <Navbar/>
        Header
        
        <div className='bg-green-400 h-20 w-full'>

                  <div className='flex justify-between '>
                  <h2 className='text-4xl font-bold text-black'> Savour <span className='text-red-300 text-2xl'>the Juicy essence in </span>every juice </h2>
                  <button className='p-2 items-center justify-center bg-red-600 rounded-2xl mt-4 mx-2 ' onClick={increaseCount}> You have clicked {count} </button>
                  alert("why are you");
                   </div>
                   {/* //fnovnev ekn dkk  */}
                   <div>

                   </div>

                   
        </div>
        </div>
        
  )
}

export default Header;