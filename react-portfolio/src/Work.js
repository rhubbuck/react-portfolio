import React from 'react';
import './index.css';
import Nama from './images/logo192.png';

const Work = () => {
  return (
    <div>
        <header>My Latest Work</header>
        <div className='grid grid-cols-2 mx-44 gap-x-5'>
            <div className='h-9 bg-red-500 work-image'></div>
            <div className='h-9 bg-red-500 work-image'></div>
            <div className='h-9 work-image cursor-pointer'></div>
            <div className='h-9 work-image cursor-pointer'></div>
            <div className='h-9 work-image cursor-pointer'></div>
            <div className='h-9 work-image cursor-pointer'></div>        
        </div>
    </div>
  )
}

export default Work