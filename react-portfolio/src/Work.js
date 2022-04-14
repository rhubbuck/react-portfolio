import React, {useState} from 'react';

import './index.css';
import Nama from './images/logo192.png';
import Modal from './Modal';

const Work = () => {
    
  return (
    <div>
        <header>My Latest Work</header>
        <div className='grid grid-cols-2 mx-44 gap-x-5'>
            <div className='h-9 bg-red-500 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>
            <div className='h-9 bg-red-500 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10'>Learn More</button>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Work