import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full fixed z-[999] px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center'>
        <div className='logo text-3xl'>PortFolio</div>
        <div className='links flex gap-10'>
        {["About" , "Skills" , "Projects" , "Contact"].map((items , index) => {
            return <a key={index} className={`text-lg font-light ${index === 3 && "ml-32"}`}>{items}</a>
        })}
        </div>
    </div>
  )
}

export default Navbar