import React from 'react';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {


  return (
    <div className='bg-slate-900 flex justify-between py-6 px-32 fixed w-full z-10 items-center'>
        <div className='flex text-white text-xl items-center'>
            <Link className='mx-2 border-2 border-pink-400 p-2 cursor-pointer' to='hero' spy={true} smooth={true} offset={-50}>RH</Link>
        </div>
        <div>
            <ul className='flex flex-row text-white'>
                <Link to='about' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out'>About</Link>
                <Link to='work' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out'>Projects</Link>
                <Link to='contact' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out'>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header