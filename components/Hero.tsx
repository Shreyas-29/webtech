import React from 'react';



function Hero() {
    return (
        <div className='w-full mb-8 pb-16 relative'>
            <span className='w-80 h-80 bg-gradient-to-l from-blue-500  to-violet-500 rounded-full opacity-40 blur-3xl absolute top-10 left-[30%] mix-blend-multiply'></span>
            <span className='w-80 h-80 bg-gradient-to-l to-fuchsia-500 from-violet-500 rounded-full opacity-40 blur-3xl absolute top-10 right-[30%] mix-blend-multiply'></span>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 aria-label='Welcome to webtech' className={`font-bold text-4xl md:text-5xl text-black dark:text-gray-300 text-center lg:mt-10 mb-8 `}>Hey we are Webtech. Where you can&nbsp;
                    <span className={`typewriter font-bold text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 to-fuchsia-500 `}></span>
                </h1>
                <p className='text-gray-600 dark:text-slate-500 font-medium text-center'>
                    Webtech is a minimal multipurpose blog. A beautiful way to share your stories and thoughts with growing audience.
                </p>
                <div className='flex items-center mt-10 relative w-11/12 sm:w-1/2 lg:w-1/3'>
                    <input type="text" className='px-4 py-2 shadow-md shadow-purple-300/50 w-full rounded-lg bg-neutral-100 caret-indigo-500 transition focus:outline-none border-none' placeholder='Explore blogs...' />
                    <button className='bg-indigo-500 text-white rounded-md hover:bg-indigo-700 capitalize px-2 py-1.5 absolute transition font-medium right-1 text-sm'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
