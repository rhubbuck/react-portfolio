import React, {useState} from 'react';

import './index.css';
import Nama from './images/logo192.png';
import Modal from './Modal';

const Work = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ title, setTitle] = useState('');
    const [ subtitle, setSubtitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ link, setLink] = useState('');
    const [ image, setImage] = useState();

    const handleClick = () => {
        setModalOpen(false);
      }

    const openNamaModal = () => {
        setTitle('Nama');
        setSubtitle('React / Firebase');
        setDescription('Mock restaurant landing page with restaurant information and menus. Reservation information is saved into a backend database to be reviewed and handled by restaurant management/staff.');
        setLink('https://github.com/rhubbuck/react-restaurant');
        setImage({Nama})
        setModalOpen(true);
    }

  return (
    <div>
        <header>My Latest Work</header>
        <div className='grid grid-cols-2 mx-44 gap-x-5'>
            <div className='h-9 bg-red-500 work-image cursor-pointer'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 transition-all duration-150'>
                    <h3 className='pt-10'>Nama Sushi</h3>
                    <button className='border-2 mt-10' onClick={openNamaModal}>Learn More</button>
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
        {modalOpen && <Modal handleClick={handleClick} title={title} subtitle={subtitle} description={description} link={link} image={image} />}
    </div>
  )
}

export default Work