import React from 'react';
import Resume from './images/resume-final.pdf';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row justify-between py-14 mt-10 px-80 text-white bg-slate-900'>
            <ul>
                <header className='text-xl mb-4'>Useful Links</header>
                <li className='m-2 cursor-pointer'><a href={Resume} target='_blank' rel='noreferrer'>Resume</a></li>
                <li className='m-2 cursor-pointer'>Github</li>
                <li className='m-2 cursor-pointer'>LinkedIn</li>
            </ul>
            <ul>
                <header className='text-xl mb-4'>Contact Me</header>
                <li className='m-2 cursor-pointer'><a href = "mailto:rhubbuck@example.com">rhubbuck@gmail.com</a></li>
                <li className='m-2'>(865) 804-0597</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer