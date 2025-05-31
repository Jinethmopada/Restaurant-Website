import React from 'react'
import { CommonImageUrlOne } from './config'

const SliderImages = ({imageId}) => {
  return (
    <div className="slider-container">
        <img className='slider-img' src={CommonImageUrlOne + imageId} />
    </div>
  )
}

export default SliderImages