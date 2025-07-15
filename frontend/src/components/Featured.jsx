import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='w-full py-20 text-black'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
      </div>

      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 1 */}
          <div
            onMouseEnter={() => setHoveredCard('fyde')}
            onMouseLeave={() => setHoveredCard(null)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            <h1 className='absolute flex z-[9] text-[#CDEA68] overflow-hidden text-8xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 'fyde' ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl w-full h-full overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onMouseEnter={() => setHoveredCard('vise')}
            onMouseLeave={() => setHoveredCard(null)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            <h1 className='absolute flex z-[9] text-[#CDEA68] overflow-hidden text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 'vise' ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl w-full h-full overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
