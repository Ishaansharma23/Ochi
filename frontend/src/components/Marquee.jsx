import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-18 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10'>
            <h1 className='text-[24vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase mb-3 -mt-3'>We Are Ochi</h1>
            <h1  className='text-[24vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold uppercase mb-3 -mt-3'>We Are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee