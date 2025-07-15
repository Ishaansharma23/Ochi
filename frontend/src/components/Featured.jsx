import React from 'react'

const Featured = () => {
    return (
        <div className='w-full py-20 text-black'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <div className="cardcontainer w-1/2 h-[70vh] relative">
                        <h1 className='absolute z-[9] text-[#CDEA68] text-8xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {"FYDE".split("").map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </h1>

                        <div className='card rounded-xl w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" />
                        </div>
                    </div>
                    <div className="cardcontainer w-1/2 h-[70vh] relative">
                        <h1 className='absolute z-[9] text-[#CDEA68] text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {"VISE".split("").map((item, index) => <span key={index}>{item}</span>)}
                        </h1>
                        <div className='card rounded-xl w-full h-full overflow-hidden'>
                            <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured