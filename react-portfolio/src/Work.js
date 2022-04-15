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
    const [ image1, setImage1] = useState();
    const [ image2, setImage2] = useState();
    const [ image3, setImage3] = useState();

    const handleClick = () => {
        setModalOpen(false);
      }

    const openNamaModal = () => {
        setTitle('Nama');
        setSubtitle('React / Firebase');
        setDescription('Mock restaurant landing page with restaurant information and menus. Reservation information is saved into a backend database to be reviewed and handled by restaurant management/staff.');
        setLink('https://github.com/rhubbuck/react-restaurant');
        setImage1('./images/nama1.png');
        setImage2('./images/nama2.png');
        setImage3('./images/nama3.png');
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
        {modalOpen && <Modal 
                            handleClick={handleClick} 
                            title={title} subtitle={subtitle} 
                            description={description} 
                            link={link} 
                            image1={image1} 
                            image2={image2} 
                            image3={image3}
                            />}
    </div>
  )
}

export default Work