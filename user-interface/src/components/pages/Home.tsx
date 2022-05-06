import React, { useState } from 'react';
import BtnSlide from './BtnSlide'
import Slider from './Slider';
import dataSlider from '../data/dataSlides';

const Home = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <>
            <div className='top-content'>
                <div className='left-content'>
                    <BtnSlide moveSlide={slideIndex} onClick={prevSlide} /><h1> read the right book to calm your mind</h1>
                </div>
                <div className='right-content'>
                    <Slider />

                </div>
            </div>
        </>
    )
}

export default Home