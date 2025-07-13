import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create" , "Eye Opening", "Presentations"].map((items , index) =>{
               return <div className='masker'>
                    <h1 className='uppercase text-[6vw] leading-[5.5vw] font-["Founders Grotesk"] tracking-tighter font-semibold'>
                       {items}
                    </h1>
                </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between px-20 py-5'>
            {["For pubic and private companies" , "From the first pitch to IPO"].map((items , index) =>{
                return <p className='font-light tracking-tight px-5 py-2 flex'>{items}
                </p>
            })}
            <div className='start flex items-center justify-center gap-2'>
                <div className='px-5 py-2 border-[1px] border-zinc-300 font-light text-sm capitalize rounded-full' >
                    Start the Project
                </div>
                <div className='w-10 h-10 flex justify-center items-center border-[2px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage