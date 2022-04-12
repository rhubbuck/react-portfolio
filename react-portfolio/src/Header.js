import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-600 flex justify-between py-5 px-24'>
        <div className='flex text-white text-lg'>
            <h3 className='mx-2'>Ryan Hubbuck</h3>
            <p className='mx-2'>fa</p>
            <p className='mx-2'>ln</p>
        </div>
        <div>
            <ul className='flex flex-row text-white'>
                <li className='mx-4 text-lg cursor-pointer'>About</li>
                <li className='mx-4 text-lg cursor-pointer'>Projects</li>
                <li className='mx-4 text-lg cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header