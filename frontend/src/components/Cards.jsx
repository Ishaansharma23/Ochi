import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-30 gap-5'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card relative  w-full rounded-xl h-full bg-[#004D43] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
            <div className="card relative w-1/2 h-full rounded-xl bg-[#192826]  flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2020</button>
            </div>
            <div className="card relative w-1/2 h-full rounded-xl bg-[#192826] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2021</button>
            </div>
        </div>
    </div>
  )
}

export default Cards