import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["Ishaan Sharma" , "MERN Developer" , "DSA Enthusiast"].map((items , index) =>{
               return <div className='masker'>
                    <h1 className='text-[6vw] leading-[5.5vw] font-["Founders Grotesk"] tracking-tighter font-semibold'>
                       {items}
                    </h1>
                </div>
            })}
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-32 flex justify-between px-20 py-5'>
            {["View My Work" , "Contact Me"].map((items , index) =>{
                return <p className='text-xl font-sans tracking-tight px-5 py-2 border-[1px] border-zinc-400 rounded-full flex'>{items}
                <span className='rotate-[90deg] px-1'>
                <FaArrowUpLong />
                </span>
                </p>
            })}
        </div>
    </div>
  )
}

export default LandingPage