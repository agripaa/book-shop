import React from 'react'
import { dataSlider } from '../data/dataSlides'

const Slider = () => {
    return (
        <div>
            {
                dataSlider.map((e, i) => {
                    return (
                        <div className='slide'>
                            <img src={process.env.PUBLIC_URL + `/images/image${i + 1}.jpg`} title={e.title} alt='carousel' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider