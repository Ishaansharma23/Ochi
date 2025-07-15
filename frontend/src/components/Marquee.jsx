import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full py-18 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1  initial={{x: 0}} animate={{x : "-100%"}} transition={{repeat: Infinity , ease : "linear" , duration: 5}} className='text-[24vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase mb-3 -mt-3 pr-20'>We Are Ochi</motion.h1>
            <motion.h1  initial={{x: 0}} animate={{x : "-100%"}} transition={{repeat: Infinity , ease : "linear" , duration: 5}}  className='text-[24vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase mb-3 -mt-3 pr-20'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee