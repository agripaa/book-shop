import React, { useState } from 'react'
import { dataSlider } from '../data/dataSlides'

const Slider = () => {
    const [] = useState();

    return (
        <div>
            {
                dataSlider.map((e, i) => {
                    return (
                        <div>
                            <img src={process.env.PUBLIC_URL + `/images/image${i + 1}`} alt='carousel' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider