import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Slider from './Slider';

const Home = () => {
    return (
        <section>
            <div className='top-content row'>
                <div className='left-content'>
                    <IoIosArrowBack className='icons-carosel' /><h1> read the right book to calm your mind</h1>
                </div>
                <div className='right-content'>
                    <Slider />
                </div>
            </div>
        </section>
    )
}

export default Home