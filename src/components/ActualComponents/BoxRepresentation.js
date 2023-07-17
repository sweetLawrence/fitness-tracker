import React from 'react'
import time from '../../ImagesFolder/remaining.png'

const BoxRepresentation = ({imageSrc,percentage,title}) => {
  return (
    <div className='box-representation'>
      <div className="icon">
        <span className='icon-representation'>
          <img className='icon-rep' src={imageSrc} alt="icon" />
        </span>
      </div>
      <div className="percentage-display">
        {percentage}
      </div>
      <div className="title">
        {title}
      </div>
    </div>
  )
}

export default BoxRepresentation