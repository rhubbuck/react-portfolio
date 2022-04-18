import React from 'react';
import './index.css';

const Hero = () => {
  return (
    <div className='hero-background'>
        <div className='pt-40 text-left px-32'>
            <div>
                <h4 className='text-white font-sans text-xl pink-text tracking-widest pb-3'>Hi, my name is</h4>
                <h1 className='text-white font-sans text-7xl pb-6'>Ryan Hubbuck.</h1>
                <h2 className='text-white font-sans text-4xl'>-Front-end Developer-</h2>
            </div>
            <div className='flex flex-row pt-44 w-full justify-around '>
                <a className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className='text-white text-lg'>Work</p>
                </a>
                <a className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <p className='text-white text-lg'>Contact</p>
                </a>
                <a className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p className='text-white text-lg'>Resume</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero