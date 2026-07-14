import React from 'react'
import Navbar from './Navbar'
import useState from "react"
const Header = () => {
  const [count,setCount] = useState(false)
  return (
    <div className='bg-white w-full h-screen  '>
       <Navbar/>
        Header
        <div className='bg-green-400 h-20 w-full'>

                      <div className='flex justify-between '>
                        <h2 className='text-4xl font-bold text-black'> Savour <span className='text-red-300 text-2xl'>the Juicy essence in </span>every juice </h2>
                    <button className=' p-2 items-center justify-center bg-blue-300 rounded-2xl mt-4 mx-2  '> Login in</button>
                      </div>
        </div>
        </div>
  )
}

export default Header