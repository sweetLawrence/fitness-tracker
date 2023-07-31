import React from 'react'

const AccruedProgress = ({imageSrc,percentage,title}) => {
    return (
        <div>
            <div className='box-representation-acc'>
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
        </div>
    )
}

export default AccruedProgress