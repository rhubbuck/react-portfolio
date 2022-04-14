import React from 'react'

const Modal = () => {
  return (
    <div className='fixed z-30 top-0 left-0 bottom-0 w-full bg-slate-400'>
        <div className='bg-white p-5 h-4/5 mt-20 w-2/5 mx-auto rounded-md flex flex-row'>
            <div className='flex justify-between flex-col'>
                <div className='w-64 h-40 bg-slate-500'>image</div>
                <div className='w-64 h-40 bg-slate-600'>image</div>
                <div className='w-64 h-40 bg-slate-700'>image</div>
            </div>
            <div>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default Modal