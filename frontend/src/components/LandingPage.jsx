import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {


    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-white text-black pt-1 '>
            <div className='textstructure mt-52 px-20 '>
                {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
                    return <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden rounded-2xl'>
                            {index == 1 && (<motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: "9vw" }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }} 
                            className='-top-[0.1vw] w-[8vw] h-[5.8vw] relative bg-zinc-600'>
                            </motion.div>)}
                            <h1 className='uppercase text-[9vw] leading-[7vw] font-["Test_Founders_Grotesk_X-Condensed"] font-bold'>
                                {items}
                            </h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between px-20 py-5'>
                {["For pubic and private companies", "From the first pitch to IPO"].map((items, index) => {
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