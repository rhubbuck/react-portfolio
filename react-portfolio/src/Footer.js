import React from 'react';
import Resume from './images/resume-final.pdf';


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Footer = () => {
  return (
    <div className='relative'>
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
                <li><br></br></li>
                <Link to='hero' spy={true} smooth={true} offset={-50}>
                <svg className='absolute right-40 bottom-10 h-12 w-12 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FF66CC" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer