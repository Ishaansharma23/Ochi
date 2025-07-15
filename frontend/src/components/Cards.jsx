import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-30 gap-5'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card w-full rounded-xl h-full bg-[#004D43]"></div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
            <div className="card w-1/2 h-full rounded-xl bg-[#192826]"></div>
            <div className="card w-1/2 h-full rounded-xl bg-[#192826]"></div>
        </div>
    </div>
  )
}

export default Cards