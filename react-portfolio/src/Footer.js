import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row justify-between py-14 px-72 text-white bg-slate-900'>
            <ul>
                <header className='text-xl mb-4'>Useful Links</header>
                <li className='m-2 cursor-pointer'>Resume</li>
                <li className='m-2 cursor-pointer'>Github</li>
                <li className='m-2 cursor-pointer'>LinkedIn</li>
            </ul>
            <ul>
                <header className='text-xl mb-4'>Contact Me</header>
                <li className='m-2 cursor-pointer'>rhubbuck@gmail.com</li>
                <li className='m-2'>(865) 804-0597</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer